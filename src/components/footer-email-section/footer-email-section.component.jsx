import React from "react";

import EmailCapture from "../email-capture/email-capture.component";
import FooterSection from "../footer-section/footer-section.component";

const FooterEmailSection = () => (
  <FooterSection ariaLabel="email capture">
    <EmailCapture className="footer__email-capture">
      Stay up to date
    </EmailCapture>
  </FooterSection>
);

export default FooterEmailSection;
