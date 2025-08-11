import { class365 } from "../constants";
import { academicSession } from "../types/academicSession-sis";
import { assessment } from "../types/assessment-sis";
import { academicData, getAcademicSession } from "./academics";

export async function getAssessmentData(acdid:string):Promise<assessment>{
    return new Promise((resolve,reject) => {
        const myHeaders = new Headers();
myHeaders.append("Authorization", class365.key);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
} as any;
console.log(acdid);
fetch(class365.baseUrl+"rest/getAssessments?acds_id="+acdid, requestOptions)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
     if(result.success === 1){
                let data = result.data.filter(x=> x.assessment_cat_name.indexOf('Overall Grading') >= 0)
                if(data.length > 0)
                resolve(data[0] as assessment); else resolve({} as any)
            } else {
                reject(result.error)
            }    

})
  .catch((error) => reject(error));
    })
}
export async function getACDAssessmentData(class_id:number){
  let acd:academicSession = await getAcademicSession();
  console.log(acd);
    let assessment:assessment= await getAssessmentData(acd.id.toString());
    let classData = (academicData.data.find(x => x.class_id===class_id))
    return {
      acd: acd.id,
      assessment: assessment.assessment_id || '',
      sectionId: classData?.section[0].section_id || '',
      classId: classData?.class_id 
    }
}