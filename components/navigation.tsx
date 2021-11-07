import React, {useState} from "react";
import Link from 'next/link'
import PostType from "../services/interfaces/PostTypesData";
import Language from "../services/interfaces/Language";
import RootStore from "../store/RootStore";
import {inject, observer} from "mobx-react";

interface NavigationProps {
  permissionsLevel: number,
  postTypes: PostType[],
  activePage: string,
  rootStore: RootStore,
}
@inject('rootStore')
@observer
class Navigation extends React.Component<NavigationProps> {
  displayPostTypes() {
    const res = []
    for (const item of this.props.postTypes) {
      if (item.uuid !== this.props.activePage) {
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

  languageList() {
    const res = [];
    for (const lang of this.props.rootStore.languages) {
      res.push(<option key={lang["shortName"]} value={lang["uuid"]}>{lang["longName"]}</option>)
    }
    return res;
  }

  changeLanguage(event: React.ChangeEvent<HTMLSelectElement>) {
    this.props.rootStore.setLanguageById(event.target.value);
  };

  render() {
    return (
    <nav className="sidebar">
      <select onChange={this.changeLanguage}>
        {this.languageList()}
      </select>
      <ul>
        <li className={"dashboard" === this.props.activePage ? "active" : ""}>
          <Link href="/" shallow={false}>
            <a>Dashboard</a>
          </Link>
        </li>
        {this.displayPostTypes()}
      </ul>
    </nav>
  )
  }
}

export default Navigation;
