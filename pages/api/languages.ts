// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {ErrorData} from "../../services/interfaces/AuthenticationData";
import Language from "../../services/interfaces/Language";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Language[] | ErrorData>
) {
  const headers = new Headers({
      'Content-Type': req.headers["content-type"]!,
      authorization: req.headers.authorization!,
    });
  const apiResRaw = await fetch(`${process.env.apiUrl}/api/languages`, {
    method: 'GET',
    headers
  });
  if (apiResRaw.ok) {
    const apiRes: Language[] = await apiResRaw.json();
    res.status(200).json(apiRes);
    return;
  }
  res.status(500).json({ error: "Can't fetch post types" });
}
