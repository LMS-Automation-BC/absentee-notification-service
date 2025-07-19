import {DateTime} from 'luxon'
const api_key = "6984896035c60de3c3d5d9c23a7aa645675997e4aa9c3fb72e67";
//const classes = `https://brookescollege.neolms.com/api/v3/classes?api_key=${api_key}&$filter={"contains":{"tags":["active"]}}`;
const classes = `https://brookescollege.neolms.com/api/v3/classes?api_key=${api_key}&$filter={"name": "TEST TEST TEST Course"}`;
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 2);
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
  let classesResponse = await (await fetch(classes)).json();
  let absentRecord:any[] =[];
  for (const classData of classesResponse){
    let sessionsResponse  = await (await  fetch(attendance_sessions(classData.id))).json(); 
    for (const session of sessionsResponse){
        let records = await (await fetch(attendance_records(classData.id,session.id))).json()
        
        for(const record of records){
            if(record.status === 'Absent'){
            record['className'] = classData.name;
            let userData = await (await fetch(user(record.user_id))).json();
            record['firstName']= userData.first_name;
            record['lastName'] = userData.lastName;
            record['email'] = userData.email;
            record['sessionDate'] = session.started_at;
            absentRecord.push(record);
            }
        }
    }
  }
  console.log(absentRecord)
  return absentRecord;
 //savecsv(absentRecord)

}

