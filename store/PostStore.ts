import {action, computed, makeAutoObservable, observable} from "mobx";
import UserInformation from "../services/interfaces/UserInformation";
import RootStore from "./RootStore";
import UserCredentials from "../services/interfaces/UserCredentials";
import AuthenticationService from "../services/authentication.service";

class PostStore {
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
}

export default PostStore;