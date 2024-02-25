import React from "react";
import DisplayPost from "../components/DisplayPost";
import { useDispatch, useSelector } from "react-redux";
import postAction from "../store/action/getPostAction";

const Post = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const fetchPosts = () => {
    dispatch(postAction({ name: "shreyansh" }));
  };
  return (
    <div>
      <DisplayPost />
      {!posts.length > 0 && (
        <button
          className="border border-solid p-1 border-blue-600"
          onClick={fetchPosts}
        >
          Fetch Post
        </button>
      )}
    </div>
  );
};

export default Post;
