import { attendance_sessions } from "../constants";
import { DateTime } from 'luxon';
export async function getAttendanceSessions(classData: any, date:string, startDate: string = '', endDate: string=''){
  let start= new Date(startDate !== ''? startDate: date)
  let end = new Date(endDate !== ''? endDate: date);
  
  //start.setHours(0, 0, 0, 0);
  end.setHours(23, 59, 59, 999);
  let luxondayStart = DateTime.local(start.getFullYear(),start.getMonth()+1, start.getDate()+1)
  let luxondayEnd = DateTime.local(end.getFullYear(),end.getMonth()+1, end.getDate()+1)
  
     return await fetch(attendance_sessions(classData.id, (luxondayStart.startOf('day')).toISO(), (luxondayEnd.endOf('day')).toISO())).then(async (response) => {
      
      if (response.ok) {
        return response.json();
      }
      let error = await response.json();
      throw new Error('could not get sessions:' + classData.name + error.message);

    }).catch((error) => {
      console.log(error); return { error: `${error.message}` };
    });
}