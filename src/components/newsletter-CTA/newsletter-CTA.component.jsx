import React from "react";
import EmailCapture from "../email-capture/email-capture.component";

import HeadingandSupportingText from "../heading-and-supporting-text/heading-and-supporting-text.component";

import "./newsletter-CTA.styles.scss";

const NewsletterCTA = () => {
  return (
    <section className="newsletter">
      <div className="newsletter__content">
        <HeadingandSupportingText
          heading="Sign up for our newsletter"
          supportingtTxt="
        Be the first to know about releases and industry news and insights."
        />
        <EmailCapture>
          We care about your data in our &nbsp;
          <a href="/" className="privacy-policy-link">
            privacy policy.
          </a>
        </EmailCapture>
      </div>
    </section>
  );
};

export default NewsletterCTA;
