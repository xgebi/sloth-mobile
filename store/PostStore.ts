import {action, computed, makeAutoObservable, observable} from "mobx";
import RootStore from "./RootStore";
import PostType from "../services/interfaces/PostTypesData";
import PostData from "../services/interfaces/PostData";
import PostService from "../services/post.service";
import PostListData from "../services/interfaces/PostListData";

class PostStore {
  @observable postTypes: PostType[];
  @observable post: PostData;
  @observable list: PostListData[];
  private rootStore: RootStore;


  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.postTypes = [];
    this.list = [];
    this.post = {

    };
    makeAutoObservable(this);
  }

  @action
  async populatePostTypes() {
    this.postTypes = await PostService.getPostTypes(this.rootStore.userStore.token);
  }

  @action
  async populatePostList(postType: string) {
    const self = this;
    PostService.getPostsList(this.rootStore.userStore.token, postType, this.rootStore.language?.uuid!).then((res) => {
      self.list = res;
    });
  }

  @action
  clearList() {
    this.list = [];
  }
}

export default PostStore;