import React from "react";
import BlogItem from "./BlogItem";

const BlogContainer = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <BlogItem />
      <BlogItem /> <BlogItem /> <BlogItem />
    </div>
  );
};

export default BlogContainer;
