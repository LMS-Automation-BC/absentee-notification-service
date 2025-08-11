import fetch, { Headers } from 'node-fetch';
import { enrollment } from '../types/enrollment-sis';
import { getACDAssessmentData } from './assessmentData';
import { class365 } from '../constants';
export default async function enrollStudent(enrollmentData: enrollment, student365Id:string){
    return new Promise(async (resolve, reject) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        myHeaders.append("Authorization", class365.key);

        let academics = await getACDAssessmentData(0);
        const urlencoded = new URLSearchParams();
        urlencoded.append("acds_id", academics.acd.toString());
        urlencoded.append("student_id", student365Id);
        urlencoded.append("class_id", academics.classId?.toString() || '');
        urlencoded.append("section_id", academics.sectionId.toString() || '');
        urlencoded.append("status", "I");
        urlencoded.append("start_date", enrollmentData.user_program_start_date);
        urlencoded.append("end_date", enrollmentData.user_program_end_date);

        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow"
        } as any;

        fetch(class365.baseUrl+"rest/studentCourseEnroll", requestOptions)
        .then((response) => response.json())
        .then((result) => resolve(result))
        .catch((error) => reject(error));
            })
}