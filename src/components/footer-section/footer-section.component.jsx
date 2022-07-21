import React from "react";

const FooterSection = ({ ariaLabel, children }) => (
  <section aria-label={ariaLabel}>{children}</section>
);

export default FooterSection;
