import { updateLMSUser } from "../lms-operations/user";
import enrollStudent from "../sis-operations/enroll";
import addStudentData, { getStudentData } from "../sis-operations/student";
import { enrollment } from "../types/enrollment-sis";

export default async function enroll(student:enrollment){
    let student365= await getStudentData(student.student_id) as any;
    if(student365.meta_data.total_count > 0){
        student365.data[0]
    } else {
       let response = await addStudentData({
             admission_number:student.student_id,
            first_name:student.user_first_name,
            last_name:student.user_last_name,
            student_email:student.user_email,
            student_dob:'',student_contact:'',gender:'',father_name:'',mother_name:'',
            parents_contact:'',parents_email:""
        }).catch(async error => {
            console.log(error);
            if (error.field_validations.admission_number){
                let response = await addStudentData({
             admission_number:student.student_id + new Date().getFullYear(),
            first_name:student.user_first_name,
            last_name:student.user_last_name,
            student_email:student.user_email
        })
            }
        });
        student365 = await getStudentData(student.student_id) as any;
        let lmsUpdate= await updateLMSUser(student.user_id,student365.data[0].id);
    console.log(`lms updated successfully for lms id ${student.user_id} as sis id ${student365.data[0].id}`);
        
    }
    
    //let academicData = await getACDAssessmentData(student.user_program_name);
    let enrollment =await enrollStudent(student, student365?.data[0]?.id)
    console.log(enrollment);
    return enrollment
}