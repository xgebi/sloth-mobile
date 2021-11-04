import React from "react";
import { enableStaticRendering } from "mobx-react";
import UserStore from "./UserStore";
import {observable} from "mobx";

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

  constructor() {
    this.userStore = new UserStore(this);
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