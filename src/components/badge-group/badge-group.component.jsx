import React from "react";
import PropType from "prop-types";

import "./badge-group.styles.scss";

const BadgeGroup = (props) => {
  const { badge, message, backgroundColor, color, padding, otherStyle } = props;

  const badgeStyle = {
    ...otherStyle,
    backgroundColor,
    padding,
  };
  return (
    <div className="badge-group" style={badgeStyle}>
      <span
        className={`small-text badge-group__text ${message ? "message" : ""}`}
        style={{ color: color }}
      >
        {badge}
      </span>
      {message && (
        <span className="small-text badge-group__text">{message}</span>
      )}
    </div>
  );
};

BadgeGroup.propType = {
  badge: PropType.string.isRequired,
  message: PropType.string,
  backgroundColor: PropType.string,
  color: PropType.string,
  myStyle: PropType.object,
};

export default BadgeGroup;
