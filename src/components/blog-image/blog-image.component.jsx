import React from "react";

import "./blog-image.styles.scss";

const BlogImage = ({ imgURL, caption, ...otherProps }) => (
  <figure className="figure-container" {...otherProps}>
    <img
      className="figure-container__img"
      src={require(`../../${imgURL}`)}
      alt=""
    />
    {caption && (
      <figcaption className="figure-container__caption medium-text">
        {caption}
      </figcaption>
    )}
  </figure>
);

export default BlogImage;
