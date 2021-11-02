import '../styles/globals.css'
import { AppProps } from 'next/app'
import RootStore from '../store/RootStore'
import { Provider } from "mobx-react";

function MyApp(myAppArgs: any) {
  const Component = myAppArgs.Component;
  const pageProps = myAppArgs.pageProps
  const rootStore = new RootStore();
  return (
      <Provider
        rootStore={rootStore}
        userStore={rootStore.userStore}
      >
        <Component {...pageProps} />
      </Provider>
  );
}
export default MyApp
