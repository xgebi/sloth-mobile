import React, {useState} from "react";
import Link from 'next/link'
import PostType from "../services/interfaces/PostTypesData";
import Language from "../services/interfaces/Language";
import RootStore from "../store/RootStore";

interface NavigationProps {
  permissionsLevel: number,
  postTypes: PostType[],
  activePage: string,
  rootStore: RootStore,
}

const Navigation = ({permissionsLevel, postTypes, activePage, rootStore}: NavigationProps) => {
  const displayPostTypes = () => {
    const res = []
    for (const item of postTypes) {
      if (item.uuid !== activePage) {
        res.push(
          <li key={item["slug"]}>
            <Link href={`/post-list/${item.uuid}`} shallow={false} replace={true}>
              {item["displayName"]}
            </Link>
          </li>
        );
      } else {
        res.push(<li key={item["slug"]} className={"active"}>
            {item["displayName"]}
            <ul>
              <li>
                <Link href={"/post/new"}>New</Link>
              </li>
            </ul>
          </li>);
      }
    }
    return res;
  };

  const languageList = () => {
    const res = [];
    for (const lang of rootStore.languages) {
      res.push(<option key={lang["shortName"]} value={lang["uuid"]}>{lang["longName"]}</option>)
    }
    return res;
  }

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    rootStore.setLanguageById(event.target.value);
  };

  return (
    <nav className="sidebar">
      <select onChange={changeLanguage}>
        {languageList()}
      </select>
      <ul>
        <li className={"dashboard" === activePage ? "active" : ""}>
          <Link href="/" shallow={false}>
            <a>Dashboard</a>
          </Link>
        </li>
        {displayPostTypes()}
      </ul>
    </nav>
  )
}

export default Navigation;
