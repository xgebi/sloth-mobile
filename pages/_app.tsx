import '../styles/globals.css';
import App, {AppContext} from "next/app";
import React from "react";
import { Provider } from "mobx-react";
import RootStore, { fetchInitialStoreState } from "../store/RootStore";

class MyApp extends App {
  state = {
    rootStore: new RootStore()
  };

  // Fetching serialized(JSON) store state
  static async getInitialProps(appContext: AppContext) {
    const appProps = await App.getInitialProps(appContext);
    const initialStoreState = await fetchInitialStoreState();

    return {
      ...appProps,
      initialStoreState
    };
  }

  // Hydrate serialized state to store
  static getDerivedStateFromProps(props: any, state: any) {
    state.rootStore.hydrate(props.initialStoreState);
    return state;
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider
        rootStore={this.state.rootStore}
        userStore={this.state.rootStore.userStore}
      >
        <Component {...pageProps} />
      </Provider>
    );
  }
}
export default MyApp;