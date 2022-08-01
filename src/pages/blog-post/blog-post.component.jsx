import React from "react";
import { useParams } from "react-router-dom";

import useWindowSize from "../../custom-hooks/useWindowSize";
import { blogCardData } from "../../data/blogCardData";
import { BlogPageFooterC1 } from "../../data/footerLinksData";
import { BlogPageFooterC2 } from "../../data/footerLinksData";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

import AvatarGroup from "../../components/avatar-label-group/avatar-label-group.component";
import BlogImage from "../../components/blog-image/blog-image.component";
import BlogSection from "../../components/blog-section/blog-section.componnent";
import BlogTypeCategories from "../../components/blog-type-catgeories/blog-type-categories.component";
import Footer from "../../components/footer/footer.component";
import HeadingandSupportingText from "../../components/heading-and-supporting-text/heading-and-supporting-text.component";
import HeroContent from "../../components/hero-content/hero-content.component";
import HeroSection from "../../components/hero-section/hero-section.component";
import MorePosts from "../../components/more-posts/more-posts.component";
import Section from "../../components/section/section.component";

import "./blog-post.styles.scss";
import FooterEmailSection from "../../components/footer-email-section/footer-email-section.component";
import FooterCopyRightLinks from "../../components/footer-copyright-links/footer-copyright-links.component";
import FooterLinks from "../../components/footer-links/footer-links.component";
import FooterSection from "../../components/footer-section/footer-section.component";
import EmailCapture from "../../components/email-capture/email-capture.component";

const BlogPostPage = () => {
  const { width } = useWindowSize();
  const { blogId } = useParams();
  const blog = blogCardData[blogId - 1];
  const {
    categoryType,
    datePosted,
    title,
    text,
    authorImage,
    author,
    imageURL,
  } = blog;
  return (
    <>
      <div className="blog-post container">
        <HeroSection>
          <HeroContent
            subHeading={`Published on ${datePosted}`}
            heading={title}
            supportingText={text}
            className="align-center"
          >
            <BlogTypeCategories categories={categoryType} />
            {width < 900 && (
              <AvatarGroup
                imageURL={authorImage}
                author={author}
                date={datePosted}
                style={{ marginTop: "32px" }}
              />
            )}
          </HeroContent>
          <BlogImage imgURL={imageURL} style={{ marginTop: "48px" }} />
        </HeroSection>
        <BlogSection author={author} avatarImage={authorImage} />
        <Section>
          <HeadingandSupportingText
            heading="From the blog"
            supportingtTxt="The latest industry news, interviews, technologies, and resources."
          />
          <MorePosts />
        </Section>
      </div>
      <FooterSection className="blog-post__newsletter-CTA">
        <HeadingandSupportingText
          heading="Join our newsletter"
          supportingtTxt="Sign up for the very best tutorials and the latest news."
        />
        <EmailCapture>
          We care about your data in our privacy policy.
        </EmailCapture>
      </FooterSection>
      <Footer className="footer__container blog-post__footer">
        <FooterSection
          ariaLabel="footer logo and company info"
          className="blog-post__footer__section"
        >
          <Logo />
          <p>
            Design amazing digital experiences that create more happy in the
            world.
          </p>
        </FooterSection>
        <FooterEmailSection />
        <FooterSection className="blog-post__footer__resources">
          <FooterLinks data={BlogPageFooterC1} heading="Product" />
          <FooterLinks data={BlogPageFooterC2} heading="Resources" />
        </FooterSection>
        <FooterCopyRightLinks />
      </Footer>
    </>
  );
};

export default BlogPostPage;
