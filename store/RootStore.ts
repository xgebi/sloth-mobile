import React from "react";
import { enableStaticRendering } from "mobx-react";
import UserStore from "./UserStore";
import {observable} from "mobx";
import PostStore from "./PostStore";

const isServer = typeof window === "undefined";
// eslint-disable-next-line react-hooks/rules-of-hooks
enableStaticRendering(isServer);

type SerializedStore = {
  title: string;
  userStore: UserStore;
};

class RootStore {
  @observable title: string | undefined;
  userStore: UserStore;
  postStore: PostStore;

  constructor() {
    this.userStore = new UserStore(this);
    this.postStore = new PostStore(this);
  }

  hydrate(serializedStore: SerializedStore) {
    this.title = serializedStore.title != null ? serializedStore.title : "";
  }
}

export default RootStore;

export async function fetchInitialStoreState() {
  // You can do anything to fetch initial store state
  return {
    title: "Sloth on the blunt edge of web"
  };
}