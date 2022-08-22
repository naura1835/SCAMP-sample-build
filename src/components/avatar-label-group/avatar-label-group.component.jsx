import React from "react";
import PropType from "prop-types";

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
      <div className="avatar-card__info">
        <h3 className="medium-text">{author}</h3>
        <span className="medium-text avatar-card__info__supporting-text">
          {otherInfo}
        </span>
      </div>
    </section>
  );
};

AvatarGroup.propType = {
  imageURL: PropType.string,
  author: PropType.string,
  otherInfo: PropType.string,
};

AvatarGroup.defaultProps = {
  imageURL: "assets/Avatar.png",
  author: "Amanda Seyfred",
  otherInfo: "06 Jan 2020",
};

export default AvatarGroup;
