// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {ErrorData} from "../../services/interfaces/AuthenticationData";
import PostListData from "../../services/interfaces/PostListData";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostListData | ErrorData>
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
    const apiRes: PostListData = await apiResRaw.json();
    res.status(200).json(apiRes);
    return;
  }
  res.status(500).json({ error: "Can't fetch post types" });
}
