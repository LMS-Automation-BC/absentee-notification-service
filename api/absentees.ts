import type { VercelRequest, VercelResponse } from '@vercel/node'
import { getAttendance } from './service/absentee.service'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  //const { name = 'World' } = req.query
  let absentees = await getAttendance()
  return res.json(absentees)
}
