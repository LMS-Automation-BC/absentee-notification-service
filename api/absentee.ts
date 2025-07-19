import type { VercelRequest, VercelResponse } from '@vercel/node'
import { getAttendance, savecsv } from './service/absentee.service'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  //const { name = 'World' } = req.query
  let absentees = await getAttendance()
  res.setHeader('ContentType',"text/csv");
  res.setHeader( "Content-Disposition", "attachment;filename=" + `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}-${new Date().getHours()}-${new Date().getMinutes()}.csv`)
  const buffer = Buffer.from(savecsv(absentees).toString(), 'utf8');
  return res.send(buffer)
}
