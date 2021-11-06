import {observable, computed, action, makeAutoObservable} from "mobx";
import RootStore from "./RootStore";
import UserCredentials from "../services/interfaces/UserCredentials";
import UserInformation from "../services/interfaces/UserInformation";
import AuthenticationService from "../services/authentication.service";
import {UserData} from "../services/interfaces/AuthenticationData";

class UserStore {
  @observable user: UserData;
  private rootStore: RootStore;


  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.user = {
      uuid: "",
      displayName: "",
      token: "",
      expiryTime: -1,
      permissionsLevel: -1,
    };
    makeAutoObservable(this);
  }
  
  @computed get isLoggedIn(): boolean {
    return this.user.uuid.length > 0 && this.user.token.length > 0;
  }

  @computed get token(): string {
    return `${this.user.displayName}:${this.user.uuid}:${this.user.token}`;
  }

  @action
  public logIn(user: UserData): void {
    this.user = user;
  }

  @action
  public logOut(): void {
    this.user = {
      uuid: "",
      displayName: "",
      token: "",
      expiryTime: -1,
      permissionsLevel: -1,
    }
  }
}

export default UserStore;