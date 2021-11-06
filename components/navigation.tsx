import React, {useState} from "react";
import Link from 'next/link'
import PostType from "../services/interfaces/PostTypesData";

interface NavigationProps {
  permissionsLevel: number,
  postTypes: PostType[],
  activePage: string,
}

const Navigation = ({permissionsLevel, postTypes, activePage}: NavigationProps) => {
  console.log(activePage);
  const displayPostTypes = () => {
    const res = []
    for (const item of postTypes) {
      res.push(
        (<li key={item["slug"]} className={item.uuid === activePage ? "active" : ""}>
          <Link href={`/post-list/${item.uuid}`}>
            {item["displayName"]}
          </Link>
        </li>)
      );
    }
    return res;
  }

  return (
    <nav className="sidebar">
      <ul>
        <li className={"dashboard" === activePage ? "active" : ""}>
          <Link href="/">
            <a>Dashboard</a>
          </Link>
        </li>
        {displayPostTypes()}
      </ul>
    </nav>
  )
}

export default Navigation;
