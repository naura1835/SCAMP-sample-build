import React from "react";

import "./heading-and-supporting-text.styles.scss";

const HeadingandSupportingText = ({ heading, supportingtTxt }) => {
  return (
    <div>
      <h2 className="content__heading">{heading}</h2>
      <p className="content__paragraph">{supportingtTxt}</p>
    </div>
  );
};

export default HeadingandSupportingText;
