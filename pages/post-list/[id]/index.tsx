import Head from 'next/head'
import {inject, observer} from "mobx-react";
import React, { useEffect } from "react";
import PageProps from "../../../services/interfaces/PageProps";
import Navigation from "../../../components/navigation";
import {withRouter} from "next/router";
import PostType from "../../../services/interfaces/PostTypesData";
import PostList from "../../../components/PostList";
import loginRedirect from "../../../effects/LoginRedirect.effect";

type PostListState = {
  postType: PostType,
}

@inject('rootStore', 'userStore', 'postStore')
@observer
class PostListPage extends React.Component<PageProps> {
  state: PostListState;

  constructor(props: PageProps) {
    super(props);
    this.state = {
      postType: this.props.postStore?.postTypes.filter(pt => pt.uuid === this.props.router.query.id as string).pop()!,
    }
    this.props.router.events.on("routeChangeComplete", async () => {
      await this.props.postStore?.populatePostList(this.props.router.query.id as string);
    })
  }

  async componentDidMount() {
    loginRedirect(this.props.userStore?.isLoggedIn!, this.props.router);
    await this.props.postStore?.populatePostList(this.props.router.query.id as string);
  }

  render() {
    return (
      <div className={'page-style'}>
        <Head>
          <title>List of {this.state.postType.displayName!} | { this.props.rootStore?.title! }</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <style jsx>{`
        
      `}</style>

        <Navigation
          permissionsLevel={this.props.userStore?.user.permissionsLevel!}
          postTypes={this.props.postStore?.postTypes!}
          activePage={this.state.postType.uuid}
          rootStore={this.props.rootStore!}
        />
        <main>
          <h1>List of {this.state.postType.displayName}</h1>

          <PostList posts={this.props.postStore?.list!} />
        </main>
      </div>
    );
  }
}

export default withRouter(PostListPage);