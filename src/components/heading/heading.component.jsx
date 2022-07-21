import React from "react";

import { ReactComponent as IconWrap } from "../../assets/icons/Icon-wrap.svg";

import "./heading.styles.scss";

const Heading = ({ title }) => (
  <div className="heading-icon-wrap">
    <h4>{title}</h4>
    <IconWrap />
  </div>
);

export default Heading;
