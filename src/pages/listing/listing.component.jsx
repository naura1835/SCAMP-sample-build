import React from "react";

import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import {
  ListingPageFooterC1,
  ListingPageFooterC2,
} from "../../data/footerLinksData";

import BlogCategories from "../../components/blog-categories/blog-categories.component";
import BlogOverview from "../../components/blog-overview/blog-overview.component";
import EmailCapture from "../../components/email-capture/email-capture.component";
import Footer from "../../components/footer/footer.component";
import FooterCopyRightLinks from "../../components/footer-copyright-links/footer-copyright-links.component";
import FooterLinks from "../../components/footer-links/footer-links.component";
import FooterSection from "../../components/footer-section/footer-section.component";
import HeroContent from "../../components/hero-content/hero-content.component";
import HeroSection from "../../components/hero-section/hero-section.component";
import NewsletterCTA from "../../components/newsletter-CTA/newsletter-CTA.component";
import Pagination from "../../components/pagination/pagination.component";

import "./listing.styles.scss";

const ListingPage = () => {
  return (
    <>
      <div className="container">
        <HeroSection>
          <HeroContent
            subHeading="Our blog"
            heading="Resources and insights"
            supportingText="
        The latest industry news, interviews, technologies, and resources"
          />
        </HeroSection>
        <section aria-label="blog section" className="blog-section">
          <BlogCategories />
          <BlogOverview />
          <Pagination />
        </section>
      </div>
      <NewsletterCTA />
      <Footer>
        <FooterSection ariaLabel="footer logo and links">
          <Logo />
          <div className="footer__content">
            <FooterLinks data={ListingPageFooterC1} />
            <FooterLinks data={ListingPageFooterC2} />
          </div>
        </FooterSection>
        <FooterSection ariaLabel="email capture">
          <EmailCapture direction="column-reverse">
            Stay up to date
          </EmailCapture>
        </FooterSection>
        <FooterCopyRightLinks />
      </Footer>
    </>
  );
};

export default ListingPage;
