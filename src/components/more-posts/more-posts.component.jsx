import React from "react";

import { blogCardData } from "../../data/blogCardData";

import BlogPostCard from "../blog-post-card/blog-post-card.component";
import Button from "../button/button.component";

import "./more-posts.styles.scss";

const MorePosts = () => (
  <div className="more-posts">
    {blogCardData
      .filter((data) => data.id <= 4)
      .map((blog) => (
        <BlogPostCard key={blog.id} blog={blog} />
      ))}
    <Button label="View all posts" />
  </div>
);

export default MorePosts;
