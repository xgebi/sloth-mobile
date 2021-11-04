import styles from './login.page.module.css';
import Head from 'next/head'
import {inject, observer} from "mobx-react";
import React, {
  ChangeEvent,
  EventHandler, FormEvent,
  FormEventHandler,
  MouseEventHandler,
  ReactEventHandler,
  useState
} from "react";
import PageProps from "../PageProps";


const Login: any = inject("rootStore")(
  observer((props: PageProps) => {


    return (
      <div className={'login-page'}>
        <Head>
          <title>Post List | { props.rootStore?.title }</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <style jsx>{`
        
      `}</style>


      </div>
    );
  })
);

export default Login;