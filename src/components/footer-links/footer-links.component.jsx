import React from "react";

import FooterLink from "../footer-link/footer-link.component";

import "./footer-links.styles.scss";

const FooterLinks = ({ heading, data, isOnlyRow }) => {
  return (
    <div
      className="footer-links"
      style={isOnlyRow ? { flexDirection: "row", columnGap: "1rem" } : {}}
    >
      {heading && <h4 className="medium-text">{heading}</h4>}
      {data.map((link, index) => (
        <FooterLink key={index} text={link} />
      ))}
    </div>
  );
};

export default FooterLinks;
