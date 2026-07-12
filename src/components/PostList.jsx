import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMsg from "./WelcomeMsg";
const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListData);

  const handleGetPostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => addInitialPost(data.posts));
  };
  return (
    <>
      {postList.length === 0 && (
        <WelcomeMsg onGetPostsClick={handleGetPostsClick}></WelcomeMsg>
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};

export default PostList;
