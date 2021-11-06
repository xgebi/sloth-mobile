import RootStore from "../../store/RootStore";
import UserStore from "../../store/UserStore";
import PostStore from "../../store/PostStore";
import {NextRouter} from "next/router";

interface WithRouterProps {
  router: NextRouter
}

interface PageProps extends WithRouterProps {
  rootStore?: RootStore,
  userStore?: UserStore,
  postStore?: PostStore,
}

export default PageProps;