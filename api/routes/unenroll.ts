import type { VercelRequest, VercelResponse } from '@vercel/node'
export default async function handler(req: VercelRequest, res: VercelResponse) {

  //const { name = 'World' } = req.query
  console.log(req.body);
  
  return res.status(200).json({params: req.query})
}

