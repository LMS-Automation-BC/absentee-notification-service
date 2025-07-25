import { attendance_sessions } from "../constants";

export async function getAttendanceSessions(classData: any){
     return await fetch(attendance_sessions(classData.id)).then(async (response) => {
      if (response.ok) {
        return response.json();
      }
      let error = await response.json();
      throw new Error('could not get sessions:' + classData.name + error.message);

    }).catch((error) => {
      console.log(error); return { error: `${error.message}` };
    });
}