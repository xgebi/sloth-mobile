import React from "react";
import { enableStaticRendering } from "mobx-react";
import UserStore from "./UserStore";
import {action, observable} from "mobx";
import PostStore from "./PostStore";
import Language from "../services/interfaces/Language";
import LanguageService from "../services/language.service";

const isServer = typeof window === "undefined";
// eslint-disable-next-line react-hooks/rules-of-hooks
enableStaticRendering(isServer);

type SerializedStore = {
  title: string;
  languages: Language[];
  currentLanguage: Language;
  userStore: UserStore;
  postStore: PostStore;
};

class RootStore {
  @observable title: string | undefined;
  @observable languages: Language[];
  @observable language: Language | undefined;
  userStore: UserStore;
  postStore: PostStore;

  constructor() {
    this.languages = [];
    this.userStore = new UserStore(this);
    this.postStore = new PostStore(this);
  }

  hydrate(serializedStore: SerializedStore) {
    this.title = serializedStore.title != null ? serializedStore.title : "";
  }

  @action
  public async setLanguages() {
    this.languages = (await LanguageService.getLanguages(this.userStore.token)) as Language[];
    this.setLanguage(this.languages.filter(lang => lang.default).pop()!);
  }

  @action setLanguage(language: Language) {
    this.language = language;
  }

  @action setLanguageById(language: string) {
    this.language = this.languages.filter(lang => lang["uuid"] === language).pop()!;
    this.postStore.clearList();
  }
}

export default RootStore;

export async function fetchInitialStoreState() {
  // You can do anything to fetch initial store state
  return {
    title: "Sloth on the blunt edge of web"
  };
}