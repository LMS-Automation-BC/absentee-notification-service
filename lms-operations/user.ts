import { user } from "../constants";

export function updateLMSUser(lmsId:string, sisId:string){
    return new Promise((resolve, reject) => {
        const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "sis_id": sisId
});

const requestOptions = {
  method: "PATCH",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
} as any;

fetch(user(lmsId), requestOptions)
  .then((response) => response.json())
  .then((result) => resolve(result))
  .catch((error) => reject(error));
    })
}
export function getLMSUser(userid:string){
  return new Promise((resolve,reject) => {
    const myHeaders = new Headers();


const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
} as any;

fetch(user(userid), requestOptions)
  .then((response) => response.json())
  .then((result) => resolve(result))
  .catch((error) => reject(error));
  })
}