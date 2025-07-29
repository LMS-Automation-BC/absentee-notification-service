import { DateTime } from 'luxon';
const api_key = "6984896035c60de3c3d5d9c23a7aa645675997e4aa9c3fb72e67";
const classes = `https://brookescollege.neolms.com/api/v3/classes?api_key=${api_key}&$filter={"contains":{"tags":["active"]}}&$limit=100`;
//const classes = `https://brookescollege.neolms.com/api/v3/classes?api_key=${api_key}&$filter={"name": "Assistive Technology and Principles of Universal Design - July/Aug 2025 (WE - Morning)"}`;
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 2);
const user = userid => `https://brookescollege.neolms.com/api/v3//users/${userid}?api_key=${api_key}`
const attendance_sessions = (classid, start, end) =>
  `https://brookescollege.neolms.com/api/v3/classes/${classid}/attendance_sessions?api_key=${api_key}&$filter={"and":[{"gte":{"started_at":"${start}"}},{"lte":{"started_at":"${end}"}}]}&$limit=100`;
 const attendance_records = (classid, sessionid) =>
  `https://brookescollege.neolms.com/api/v3/classes/${classid}/attendance_sessions/${sessionid}/user_attendance?api_key=${api_key}&$limit=100`;

 export{api_key, classes, yesterday, user, attendance_sessions, attendance_records}