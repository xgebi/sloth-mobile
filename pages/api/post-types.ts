// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {ErrorData, UserData} from "../../services/interfaces/AuthenticationData";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserData | ErrorData>
) {
  const headers = new Headers({
      'Content-Type': req.headers["content-type"]!,
      authorization: req.headers.authorization!,
    });
  const apiResRaw = await fetch(`${process.env.apiUrl}/api/post-types`, {
    method: 'GET',
    headers
  });
  if (apiResRaw.ok) {
    const apiRes: UserData = await apiResRaw.json();
    res.status(200).json(apiRes);
    return;
  }
  res.status(500).json({ error: "Can't fetch post types" });
}
