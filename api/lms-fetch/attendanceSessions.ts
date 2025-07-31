import { attendance_sessions } from "../constants";
export async function getAttendanceSessions(classData: any, date:string, startDate: string = '', endDate: string=''){
  let start= new Date(startDate !== ''? startDate: date)
  let end = new Date(endDate !== ''? endDate: date);
  
  console.log(`${start.getFullYear()}-${start.getMonth()+1}-${start.getUTCDate()}T00:00:00.001-06:00`);
  console.log(`${end.getFullYear()}-${end.getMonth()+1}-${end.getUTCDate()}T23:59:59.999-06:00`);
     return await fetch(attendance_sessions(classData.id, `${start.getFullYear()}-${start.getMonth()+1}-${start.getUTCDate()}T00:00:00.001-06:00`, 
     `${end.getFullYear()}-${end.getMonth()+1}-${end.getUTCDate()}T23:59:59.999-06:00`)).then(async (response) => {
      
      if (response.ok) {
        return response.json();
      }
      let error = await response.json();
      throw new Error('could not get sessions:' + classData.name + error.message);

    }).catch((error) => {
      console.log(error); return { error: `${error.message}` };
    });
}