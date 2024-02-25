import React from "react";
import { useSelector } from "react-redux";

const DisplayPost = () => {
  const { posts, loading } = useSelector((state) => state.posts);

  if (loading) {
    return <h1 className="text-xl">Loading....</h1>;
  }
  return (
    <div>
      {posts.map((singlePost, key) => {
        return (
          <div key={key}>
            <h3>{singlePost.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayPost;
