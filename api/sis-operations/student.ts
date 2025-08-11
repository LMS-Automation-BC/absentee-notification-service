
import fetch, { Headers } from 'node-fetch';
import { class365 } from '../constants';
import { student } from '../types/student-sis';
export function getStudentData(admission_number:string){
return new Promise((resolve,reject) =>{
    const myHeaders = new Headers();
myHeaders.append("Authorization",class365.key );

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
} as any;

fetch(class365.baseUrl+`rest/studentsData?filter={\"admission_number\":\"${admission_number}\"}`, requestOptions)
  .then((response) => response.json())
  .then((result) => {if (result.success=== 1) resolve(result) 
    else {reject(result.error)}})
  .catch((error) => reject(error));
})

    
}
export default function addStudentData(data:student){
    return new Promise((resolve, reject) => {
        const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
myHeaders.append("Authorization", class365.key);

//"{\"admission_number\":\"2016_1_api\",\"first_name\":\"sofia\",\"last_name\":\"Developer\",\"student_dob\":\"2000-05-08\",\"student_email\":\"support@a.com\",\"student_contact\":\"123123123\",\"gender\":\"Female\",\"father_name\":\"Johnson\",\"mother_name\":\"Scarlett\",\"parents_contact\":\"11111111\",\"parents_email\":\"support@a.com\"}"
const urlencoded = new URLSearchParams();
console.log(`"${JSON.stringify(data)}"`);
urlencoded.append("data", JSON.stringify(data));

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: urlencoded,
  redirect: "follow"
} as any;

fetch(class365.baseUrl+"rest/student", requestOptions)
  .then((response) => response.json())
  .then((result) => {if(result.success === 1){
    resolve(result);
  } else {reject(result)}})
  .catch((error) => console.error(error));


    })
}