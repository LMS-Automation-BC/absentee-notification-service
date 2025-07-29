import { attendance_sessions } from "../constants";
import { DateTime } from 'luxon';
export async function getAttendanceSessions(classData: any, date:string){
  let start= new Date(date);
  let end = new Date(date);
  
  //start.setHours(0, 0, 0, 0);
  end.setHours(23, 59, 59, 999);
  let luxonday = DateTime.local(start.getFullYear(),start.getMonth()+1, start.getDate()+1)
  console.log(attendance_sessions(classData.id, (luxonday.startOf('day')).toISO(), (luxonday.endOf('day')).toISO()))
     return await fetch(attendance_sessions(classData.id, (luxonday.startOf('day')).toISO(), (luxonday.endOf('day')).toISO())).then(async (response) => {
      
      if (response.ok) {
        return response.json();
      }
      let error = await response.json();
      throw new Error('could not get sessions:' + classData.name + error.message);

    }).catch((error) => {
      console.log(error); return { error: `${error.message}` };
    });
}