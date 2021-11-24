// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {ErrorData} from "../../../services/interfaces/AuthenticationData";
import PostData from "../../../services/interfaces/PostData";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostData | ErrorData>
) {
    const postUuid = req.query.uuid;
    const headers = new Headers({
      'Content-Type': req.headers["content-type"]!,
      authorization: req.headers.authorization!,
    });

  const apiResRaw = await fetch(`${process.env.apiUrl}/api/post/${postUuid}/edit`, {
    method: 'GET',
    headers
  });
  console.log(apiResRaw);
  if (apiResRaw.ok) {
    const apiRes: PostData = await apiResRaw.json();
    res.status(200).json(apiRes);
    return;
  }
  res.status(401).json({ error: "Can't fetch the post" });
}
