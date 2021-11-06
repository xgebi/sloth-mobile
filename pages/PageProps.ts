import RootStore from "../store/RootStore";
import UserStore from "../store/UserStore";
import PostStore from "../store/PostStore";

interface PageProps {
  rootStore?: RootStore,
  userStore?: UserStore,
  postStore?: PostStore,
}

export default PageProps;