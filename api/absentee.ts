import type { VercelRequest, VercelResponse } from '@vercel/node'
import { getAttendance, savecsv } from './service/absentee.service'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { name = 'World' } = req.query
  let absentees = await getAttendance().catch(err => err);
  if (absentees.error || absentees.message){
    return res.status(500).send({'message':absentees})
  }
  res.setHeader('ContentType',"text/csv");
  res.setHeader( "Content-Disposition", "attachment;filename=" + `AbsenteeReport-${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}-${new Date().getHours()}-${new Date().getMinutes()}.csv`)
  const buffer = Buffer.from(savecsv(absentees).toString(), 'utf8');

  return res.status(200).send(buffer)
  //return res.status(200).send({message:'sent'})
}
