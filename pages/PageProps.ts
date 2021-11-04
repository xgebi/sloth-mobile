import RootStore from "../store/RootStore";
import UserStore from "../store/UserStore";

interface PageProps {
  rootStore?: RootStore,
  userStore?: UserStore,
}

export default PageProps;