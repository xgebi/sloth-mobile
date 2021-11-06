import PostListData from "../services/interfaces/PostListData";
import dateFormatter from "../utilities/dateFormatter";
import Link from "next/link";
import React from "react";

interface PostListProps {
  posts: PostListData[]
}

const PostList = ({posts}: PostListProps) => {
  const createTableContents = () => {
    const res = [];
    for (const item of posts) {
      res.push(
        <tr key={item.uuid}>
          <td>{item.title}</td>
          <td>{item.status}</td>
          <td>{dateFormatter(item.updateDate)}</td>
          <td>{dateFormatter(item.publishDate)}</td>
          <td>
            <Link href={`/post/${item.uuid}`}>
              Edit
            </Link>
          </td>
        </tr>
      )
    }
    return res;
  }

  return (
    <table>
      <thead>
      <tr>
        <th>Title</th>
        <th>Status</th>
        <th>Update Date</th>
        <th>Published Date</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      {createTableContents()}
      </tbody>
    </table>
  )
}

export default PostList;