import type { VercelRequest, VercelResponse } from '@vercel/node'
import enroll from './service/enroll.service';
export default async function handler(req: VercelRequest, res: VercelResponse) {

  //const { name = 'World' } = req.query
  console.log(req.body.student_id);
  let data = await enroll(req.body);
  return res.status(200).json(data)
}

