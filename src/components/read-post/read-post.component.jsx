import React from "react";

import { ReactComponent as IconWrap } from "../../assets/icons/Icon-wrap.svg";

import "./read-post.styles.scss";

const ReadMore = () => (
  <a href="/" className="read-more">
    <span>Read Post</span>
    <IconWrap />
  </a>
);

export default ReadMore;
