import fetch, { Headers } from 'node-fetch';
import { getAcademicSession } from '../sis-operations/academics';
import { academicSession } from '../types/academicSession-sis';
import { getAssessmentData } from '../sis-operations/assessmentData';
import { assessment } from '../types/assessment-sis';
export async function updateGrade365(score, subjectId) {
  let scoreData= {};
  //scoredata[`${x['365_id']}`] = {"score":`${score.split('%')[0]}`,"comment":"","status":""}
  let acd:academicSession = await getAcademicSession();
  let assessment:assessment | undefined= await getAssessmentData(acd.id.toString());
  new Promise((resolve, reject) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append(
      "Authorization",
      "Basic YnJvb2tlc2NvbGxlZ2U6TmFON3grbXo2UjhiI294Nw=="
    );
    myHeaders.append("Cookie", "CAKEPHP=90ojn1t115tvqq26usht1l65bc");

    const urlencoded = new URLSearchParams();
    urlencoded.append("acds_id", acd.id.toString());
    urlencoded.append("assessment_id", assessment?.assessment_id?.toString() || '');
    urlencoded.append(
      "score_data",
      scoreData.toString()
    );
    urlencoded.append("subject_id", subjectId);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    } as any;

      fetch(
      "https://brookescollege.classe365.com/rest/saveAssessmentScore",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        resolve(result)})
      .catch((error) => {
        console.log(error);reject(error)});
  });
}