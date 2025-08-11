import { getClasses } from '../lms-operations/classes';
import {  getAttendanceSessions } from '../lms-operations/attendanceSessions';
import {attendance_records, user} from '../constants';
import { getAttendanceRecords } from '../lms-operations/attendanceRecords';
import { getLMSUser, updateLMSUser } from '../lms-operations/user';
import { getStudentData } from '../sis-operations/student';
import { updateAttendance } from '../sis-operations/attendance';
import { academicData } from '../sis-operations/academics';

export async function getAttendance(date:string, startDate:string, endDate:string) {
   let totalcalls = 0;
  let classesResponse = await getClasses().then(res => res).catch(err => {throw new Error(err.message)});
  totalcalls++;
  let absentRecord: any[] = [];
  for (const classData of classesResponse) {
    let sessionsResponse = await getAttendanceSessions(classData,date,startDate,endDate);
    totalcalls++;
    //console.log(sessionsResponse);
    if (sessionsResponse.error) continue;
    for (const session of sessionsResponse) {
        let records = await getAttendanceRecords(classData.id, session.id, session.name);
        totalcalls++;
        if(records.error) continue;
        let data  = {} as any;
        
        let sisStatusUpdate = 'completed';
        let updatingSISDetails ;
        
        
        for (const record of records) {
          //get enrollmentnumber from lms for record.user_id
          const lmsenrollment_no = await getLMSUser(record.user_id) as any;
          updatingSISDetails = findClassAndSection(classData.course_code, lmsenrollment_no.custom_fields["Program Name"] || '')
          //find sis_id on 365
          let sisId=lmsenrollment_no.sis_id;
          //update sis_id on lms
          if(lmsenrollment_no.studentID === '1124-03-1502'){
            console.log('')
          }
          if(lmsenrollment_no.sis_id === '' || lmsenrollment_no.sis_id === undefined || lmsenrollment_no.sis_id===null) {
            const sisUser = await getStudentData(lmsenrollment_no?.studentID) as any;
            const lmsUpdate = await updateLMSUser(lmsenrollment_no?.id,sisUser?.data?.[0]?.id)
            sisId = sisUser?.data[0]?.id 
            if(sisId=== undefined){
            console.log('notfound' + JSON.stringify(sisUser) + lmsenrollment_no?.studentID)
            }
          }
          if(sisId=== undefined || sisId==='' || sisId===null){
            record['sisUpdate']= 'no sis id found for user:'+ lmsenrollment_no.studentID;
          } else {
            record['sisUpdate']= sisStatusUpdate;
          }
          //update attendance on 365
         
          if(updatingSISDetails.updatingClass !== undefined && updatingSISDetails.updatingSubject!==undefined 
            && sisId!== undefined && sisId!=='' && sisId!==null
          ){
            data[sisId] = {status: record.status ==='Absent' ? 'a': record.status === 'Late'?'l':'p'
            , comment:''}
          }
          
          //data.push(record[])
          //if (record.status !== 'OnTime') {
            record['className'] = classData.name;
            let userData = await (await fetch(user(record.user_id))).json();
            record['firstName'] = userData.first_name;
            record['lastName'] = userData.last_name;
            record['email'] = userData.email;
            record['sessionDate'] = session.started_at.split('T')[0];
            record['coursecode']=classData.course_code;
            
            record['sis id']= sisId;
            record['sisclass']=updatingSISDetails?.updatingClass?.class_name || 'not found';
            record['lms program name']= lmsenrollment_no.custom_fields["Program Name"]
            absentRecord.push(record);

          //}
        } 
        if(Object.keys(data).length > 0){
          let attendanceUpdate= await updateAttendance(JSON.stringify(data),updatingSISDetails.updatingSubject.subject_id,updatingSISDetails.updatingClass.class_id,date).catch(err => {
            sisStatusUpdate = err.error;
            absentRecord =absentRecord.map(x=> {
              if(x.sisclass ===updatingSISDetails.updatingClass.class_name ){
                x.sisUpdate = sisStatusUpdate;
              }
              return x;
            })
          })
        }
        
    }
  }
  console.log('totalcalls'+totalcalls)
  return absentRecord;

}
function programLMS_SISClass(program: string){
  switch (program){
  case("MOA and UC"):
    return 'Medical Office Assistants and Unit Clerks';
  case("Human Service"):
    return 'Human Services Diploma';
  case("Business Administration - Retail"):
    return 'Business Administration Diploma - Retail Mgt'
  case("Business Administration - Accounting"):
    return 'Business Administration Diploma - Accounting'
  case("Education Assistant"): 
    return 'Education Assistant Diploma'
  case("Pharmacy Assistant"): 
    return 'Pharmacy Assistant Diploma'
  case("Digital Marketing"):
  return 'Digital Marketing Diploma'
  default: 
    return program

}
}
function findClassAndSection(course_code:string, program_name:string=''){
        let updatingSubject ;
        let updatingClass;
        for (const acClass of academicData.data){
          if(program_name!=='' && acClass.class_name !== programLMS_SISClass(program_name)){
            continue;
          }
          updatingSubject = acClass.section[0].subject.find(y => y.subject_code === course_code)
          
          if(updatingSubject!== undefined){
            updatingClass = acClass;
            break;
          }
        }
        if(updatingSubject === undefined || updatingClass === undefined){
          console.log('notfound')
        }
        return {updatingSubject, updatingClass}
}
export function savecsv(data) {
  //console.log(data)
  const headers = Object.keys(data[0]);
  const csvRows = [headers.join(",")];
  data.forEach((item) => {
    const row = headers.map((field) => {
      let value = item[field];
      if (typeof value === "string") {
        // Escape double quotes in values
        value = `"${value.replace(/"/g, '""')}"`;
      }
      return value;
    });
    csvRows.push(row.join(","));
  });
  return csvRows.join('\n');
}
