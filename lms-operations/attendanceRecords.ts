import { attendance_records } from "../constants";

export async function getAttendanceRecords(classDataId: string, sessionId: string, sessionName: string) {
    return await fetch(attendance_records(classDataId, sessionId)).then(async (response) => {
        if (response.ok) {
            return response.json();
        }
        let error = await response.json();
        throw new Error('could not get attendance records:' + sessionName + error.message);

    }).catch((error) => {        
        console.log(error); return { error: `${error}` };
    });
}