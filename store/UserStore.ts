import {observable, computed, action, makeAutoObservable} from "mobx";
import RootStore from "./RootStore";

interface User {
  name: string,
  token: string,
}

class UserStore {
  user: User;
  private rootStore: RootStore;


  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.user = {
      name: "",
      token: ""
    };
    makeAutoObservable(this);
  }

  @action
  public logIn(token: string): boolean {
    const splitToken = token.split(":");
    if (splitToken.length === 2) {
      this.user = {
        name: splitToken[0],
        token: splitToken[1]
      }
      return true;
    }
    return false
  }

  @action
  public logOut(): void {
    this.user = {
      name: "",
      token: "",
    }
  }
}

export default UserStore;