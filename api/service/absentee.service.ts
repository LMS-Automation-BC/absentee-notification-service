import { DateTime } from 'luxon';
import { getClasses } from '../lms-fetch/classes';
import { getAttendanceSessions } from '../lms-fetch/attendanceSessions';
import {attendance_records, user} from '../constants';
import { getAttendanceRecords } from '../lms-fetch/attendanceRecords';

export async function getAttendance(date:string, startDate:string, endDate:string) {
   let totalcalls = 0;
  let classesResponse = await getClasses().then(res => res).catch(err => {throw new Error(err.message)});
  totalcalls++;
  let absentRecord: any[] = [];
  for (const classData of classesResponse) {
    let sessionsResponse = await getAttendanceSessions(classData,date,startDate,endDate);
    totalcalls++;
    //console.log(sessionsResponse);
    if (sessionsResponse.error) continue;
    for (const session of sessionsResponse) {
        let records = await getAttendanceRecords(classData.id, session.id, session.name);
        totalcalls++;
        if(records.error) continue;
        for (const record of records) {
          if (record.status !== 'OnTime') {
            record['className'] = classData.name;
            let userData = await (await fetch(user(record.user_id))).json();
            record['firstName'] = userData.first_name;
            record['lastName'] = userData.last_name;
            record['email'] = userData.email;
            record['sessionDate'] = DateTime.fromISO(session.started_at).toFormat('dd-MM-yyyy');
            absentRecord.push(record);
          }
        } 
    }
  }
  console.log('totalcalls'+totalcalls)
  return absentRecord;

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
  return csvRows.join('\n');
}

