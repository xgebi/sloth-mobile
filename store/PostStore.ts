import {action, computed, makeAutoObservable, observable} from "mobx";
import RootStore from "./RootStore";
import PostType from "../services/interfaces/PostTypesData";
import PostData from "../services/interfaces/PostData";
import PostService from "../services/post.service";

class PostStore {
  @observable postTypes: PostType[];
  @observable post: PostData;
  private rootStore: RootStore;


  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.postTypes = [];
    this.post = {

    };
    makeAutoObservable(this);
  }

  @action
  async populatePostTypes() {
    this.postTypes = await PostService.getPostTypes(this.rootStore.userStore.token);
  }
}

export default PostStore;