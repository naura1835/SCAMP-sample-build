import React from "react";

import "./footer.styles.scss";

const Footer = ({ children, ...otherProps }) => {
  return (
    <footer className="footer__container" {...otherProps}>
      <div className="footer">{children}</div>
    </footer>
  );
};

export default Footer;
