import React from "react";

import "./avatar-label-group.styles.scss";

const AvatarGroup = ({ imageURL, author, otherInfo, ...otherProps }) => {
  return (
    <section
      aria-label="author details"
      className="avatar-card"
      {...otherProps}
    >
      <img
        className="avatar-card__image"
        src={require(`../../${imageURL}`)}
        alt=""
      />
      <div className="author-card__info">
        <h3 className="medium-text">{author}</h3>
        <span className="medium-text author-card__info__supporting-text">
          {otherInfo}
        </span>
      </div>
    </section>
  );
};

export default AvatarGroup;
