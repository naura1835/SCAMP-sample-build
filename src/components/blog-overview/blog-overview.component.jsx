import React from "react";

import useWindowSize from "../../custom-hooks/useWindowSize";

import { blogCardData } from "../../data/blogCardData";
import BlogPostCard from "../blog-post-card/blog-post-card.component";

import "./blog-overview.styles.scss";

const BlogOverview = () => {
  const { width } = useWindowSize();

  const count = width < 900 ? 6 : blogCardData.length;
  return (
    <main className="blog-overview">
      {blogCardData
        .filter((blogPost) => blogPost.id <= count)
        .map((blogPost) => (
          <BlogPostCard key={blogPost.id} blog={blogPost} />
        ))}

      {/* return <BlogPostCard key={blogPost.id} blog={blogPost} />;
      })} */}
    </main>
  );
};

export default BlogOverview;
