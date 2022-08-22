import React from "react";
import { useLocation, matchPath } from "react-router-dom";
import AttributionCard from "../attribution-card/attribution-card.component";

import AvatarGroup from "../avatar-label-group/avatar-label-group.component";
import BadgeGroup from "../badge-group/badge-group.component";
import Heading from "../heading/heading.component";
import ReadMore from "../read-post/read-post.component";

import "./blog-post-card.styles.scss";

const BlogPostCard = ({ blog }) => {
  const {
    id,
    imageURL,
    title,
    categoryType,
    readTime,
    text,
    authorImage,
    author,
    datePosted,
    featured,
  } = blog;

  const { pathname } = useLocation();

  const isMatch = matchPath("/blog-post/:blogId", pathname);

  // console.log(isMatch);

  return (
    <article
      className={`blog-card ${featured && !!!isMatch ? "featured" : ""}`}
    >
      <div className="blog-card__img-container">
        <img
          className="blog-card__img"
          src={require(`../../${imageURL}`)}
          alt=""
        />
        {isMatch ? (
          <AttributionCard
            author={author}
            date={datePosted}
            category={categoryType.split(", ")[0]}
          />
        ) : null}
      </div>
      <div>
        {isMatch ? null : (
          <BadgeGroup
            className="blog-card__badge"
            badge={categoryType.split(", ")[0]}
            message={readTime}
          />
        )}
        {isMatch ? <h4>{title}</h4> : <Heading title={title} id={id} />}
        <p className="blog-card__text">{text}</p>
        {isMatch ? (
          <ReadMore id={id} />
        ) : (
          <AvatarGroup
            imageURL={authorImage}
            author={author}
            otherInfo={datePosted}
          />
        )}
      </div>
    </article>
  );
};

export default BlogPostCard;
