import React from "react";

import AvatarGroup from "../avatar-label-group/avatar-label-group.component";
import SocialLinks from "../social-links/social-links.component";

import "./avatar-and-social-links.styles.scss";

const AvatarSocialLinks = ({ author, authorImage }) => (
  <div className="avatar-social">
    <AvatarGroup
      author={author}
      date="Product Designer, Untitled"
      imageURL={authorImage}
    />
    <SocialLinks />
  </div>
);

export default AvatarSocialLinks;
