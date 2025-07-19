import {DateTime} from 'luxon';
import * as fs from 'fs';
const api_key = "6984896035c60de3c3d5d9c23a7aa645675997e4aa9c3fb72e67";
const classes = `https://brookescollege.neolms.com/api/v3/classes?api_key=${api_key}&$filter={"contains":{"tags":["active"]}}`;
//const classes = `https://brookescollege.neolms.com/api/v3/classes?api_key=${api_key}&$filter={"name": "TEST TEST TEST Course"}`;
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 10);
// const attendance_sessions = (classid) =>
//   `https://brookescollege.neolms.com/api/v3/classes/${classid}/attendance_sessions?api_key=${api_key}&$filter={"and":[{"gte":{"started_at":"${DateTime.fromJSDate(
//     yesterday
//   ).toISO()}"}}
//   ,{"lte":{"finished_at":"${DateTime.fromJSDate(new Date()).toISO()}"}}
//   ]}`;
const user = userid => `https://brookescollege.neolms.com/api/v3//users/${userid}?api_key=${api_key}`
  const attendance_sessions = (classid) =>
  `https://brookescollege.neolms.com/api/v3/classes/${classid}/attendance_sessions?api_key=${api_key}&$filter={"gte":{"started_at":"${DateTime.fromJSDate(yesterday).toISO()}"}}`;
const attendance_records = (classid, sessionid) =>
  `https://brookescollege.neolms.com/api/v3/classes/${classid}/attendance_sessions/${sessionid}/user_attendance?api_key=${api_key}`;

export async function getAttendance() {
  let classesResponse = await fetch(classes).then((response)=> {
      if (response.ok) {
    return response.json();
  }
  throw new Error('could not get classes');

    }).catch((error) => {
  console.log(error);throw new Error('could not get classes');
});
  console.log('class response');
  console.log(classesResponse)
  let absentRecord:any[] =[];
  for (const classData of classesResponse){
    let sessionsResponse  = await  fetch(attendance_sessions(classData.id)).then((response)=> {
      if (response.ok) {
    return response.json();
  }
  throw new Error('could not get sessiolns');

    }).catch((error) => {
  console.log(error);throw new Error('could not get sessiolns');
});
    console.log(sessionsResponse)
    for (const session of sessionsResponse){
        let records =await fetch(attendance_records(classData.id,session.id)).then((response)=> {
      if (response.ok) {
    return response.json();
  }
  throw new Error('could not find attendance records');

    }).catch((error) => {
  console.log(error)
  throw new Error('could not find attendance records');
});
        
        for(const record of records){
            if(record.status === 'Absent'){
            record['className'] = classData.name;
            let userData = await (await fetch(user(record.user_id))).json();
            record['firstName']= userData.first_name;
            record['lastName'] = userData.last_name;
            record['email'] = userData.email;
            record['sessionDate'] = DateTime.fromISO(session.started_at).toFormat('dd-MM-yyyy');
            absentRecord.push(record);
            }
        }
    }
  }
  return absentRecord;
 //savecsv(absentRecord)

}
export function savecsv(data) {
  const headers = Object.keys(data[0]);
  const csvRows = [headers.join(",")];
  data.forEach((item) => {
    const row = headers.map((field) => {
      let value = item[field];
      if (typeof value === "string") {
        // Escape double quotes in values
        value = `"${value.replace(/"/g, '""')}"`;
      }
      return value;
    });
    csvRows.push(row.join(","));
  });
  //fs.writeFileSync(`${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}-${new Date().getHours()}-${new Date().getMinutes()}.csv`, csvRows.join('\n'), 'utf8');
  console.log('CSV file saved as output.csv');
  return csvRows.join('\n');
}

