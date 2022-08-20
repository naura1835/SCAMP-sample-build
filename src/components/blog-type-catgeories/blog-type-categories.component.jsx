import React from "react";

import BadgeGroup from "../../components/badge-group/badge-group.component";

import "./blog-type-categories.styles.scss";

const BlogTypeCategories = ({ categories }) => {
  const categoriesArray = categories.split(", ");

  return (
    <section aria-label="article category" className="blog-type-categories">
      {categoriesArray.map((category, index) => (
        <BadgeGroup key={index} badge={category} />
      ))}
    </section>
  );
};

export default BlogTypeCategories;
