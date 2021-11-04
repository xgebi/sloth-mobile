import {observable, computed, action, makeAutoObservable} from "mobx";
import RootStore from "./RootStore";
import UserCredentials from "../services/interfaces/UserCredentials";
import UserInformation from "../services/interfaces/UserInformation";
import AuthenticationService from "../services/authentication.service";

class UserStore {
  @observable user: UserInformation;
  private rootStore: RootStore;


  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.user = {
      name: "",
      token: ""
    };
    makeAutoObservable(this);
  }
  
  @computed get isLoggedIn(): boolean {
    return this.user.name.length > 0 && this.user.token.length > 0;
  }

  @action
  public logIn(user: UserCredentials): boolean {
    const result = AuthenticationService.loginUser(user);
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