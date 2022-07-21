import React from "react";

import { links } from "../../data/footerLinksData";

import Copyright from "../../components/copyright/copyright.component";
import FooterLinks from "../../components/footer-links/footer-links.component";
import FooterSection from "../../components/footer-section/footer-section.component";

import "./footer-copyright-links.styles.scss";

const FooterCopyRightLinks = () => (
  <FooterSection
    ariaLabel="privacy, terms and cookies links"
    className="copyright-links"
  >
    <div className="copyright-links__content">
      <FooterLinks data={links} isOnlyRow />
      <Copyright />
    </div>
  </FooterSection>
);

export default FooterCopyRightLinks;
