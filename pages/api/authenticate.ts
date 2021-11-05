// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(`${process.env.apiUrl}/api/login`);
  const apiResRaw = await fetch(`${process.env.apiUrl}/api/login`, {
    method: 'POST',
    body: req.body
  });
  if (apiResRaw.ok) {
    const apiRes = await apiResRaw.json();
    console.log(apiRes);
  }
  res.status(200).json({ name: 'John Doe' })
}
