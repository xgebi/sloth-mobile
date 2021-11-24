import PostType from "./interfaces/PostTypesData";
import PostListData from "./interfaces/PostListData";
import PostData from "./interfaces/PostData";

class PostService {
  static async getPostTypes(token: string): Promise<PostType[]> {
    const headers = new Headers({
      'Content-Type': 'application/json',
      authorization: token,
    });
    const responseRaw = await fetch(`${process.env.nextUrl}/api/post-types`, {
      method: 'GET',
      cache: "no-cache",
      headers
    })
    return (await responseRaw.json()) as PostType[];
  }

  static async getPostsList(token: string, postType: string, language: string): Promise<PostListData[]> {
    const headers = new Headers({
      'Content-Type': 'application/json',
      authorization: token,
    });
    const responseRaw = await fetch(`${process.env.nextUrl}/api/post-list/${postType}/${language}`, {
      method: 'GET',
      cache: "no-cache",
      headers
    })
    return await responseRaw.json() as Promise<PostListData[]>;
  }

  static async getPost(token: string, postUuid: string): Promise<PostData> {
    const headers = new Headers({
      'Content-Type': 'application/json',
      authorization: token,
    });
    const responseRaw = await fetch(`${process.env.nextUrl}/api/post/${postUuid}`, {
      method: 'GET',
      cache: "no-cache",
      headers
    })
    return await responseRaw.json() as Promise<PostData>;
  }
}

export default PostService;