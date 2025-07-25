import { classes } from "../constants";

export async function getClasses(){
   return await fetch(classes).then(async (response) => {
    if (response.ok) {
      return response.json();
    }
    let error = await response.json();
    throw new Error(error.message);

  }).catch((error) => {
    console.log(error); 
    throw new Error('could not get classes:' + error.message);
  });
}