import React from "react";

const FooterSection = ({ ariaLabel, children, ...otherProps }) => (
  <section aria-label={ariaLabel} {...otherProps}>
    {children}
  </section>
);

export default FooterSection;
