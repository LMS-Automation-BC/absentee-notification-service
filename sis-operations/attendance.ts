import { class365 } from "../constants";
import { getACDAssessmentData } from "./assessmentData";

export async function updateAttendance(attendance_data:string,subject_id:string, class_id:number,date:string ){
    return new Promise(async (resolve, reject) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        myHeaders.append("Authorization", class365.key);
        

        const urlencoded = new URLSearchParams();
        let academics = await getACDAssessmentData(class_id);
        urlencoded.append("acds_id", academics.acd.toString());
        urlencoded.append("class_id", class_id.toString());
        urlencoded.append("section_id", academics.sectionId.toString() || '');
        urlencoded.append("subject_id", subject_id);
        urlencoded.append("date", date);
        urlencoded.append("working", "1");
        urlencoded.append("attendance_data", attendance_data);
        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow"
        } as any;

        fetch(class365.baseUrl+"rest/manageAttendance", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            if(result.success ===1){
                resolve(result)
            } else {
                reject(result)
            }
        })
        .catch((error) => reject(error));
            })
}