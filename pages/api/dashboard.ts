// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {ErrorData, UserData} from "../../services/interfaces/AuthenticationData";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserData | ErrorData>
) {
  const apiResRaw = await fetch(`${process.env.apiUrl}/api/dashboard`, {
    method: 'POST',
    body: req.body
  });
  if (apiResRaw.ok) {
    const apiRes: UserData = await apiResRaw.json();
    res.status(200).json(apiRes);
    return;
  }
  res.status(401).json({ error: "Can't authenticate" });
}
