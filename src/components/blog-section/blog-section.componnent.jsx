import React from "react";
import AvatarSocialLinks from "../avatar-and-social-links/avatar-and-social-links.components";

import BlockQuote from "../blockquote/blockquote.component";
import BlogConclusion from "../blog-conclusion/blog-conclusion.component";
import BlogDetail from "../blog-detail/blog-detail.component";
import BlogImage from "../blog-image/blog-image.component";
import BlogIntroduction from "../blog-introduction/blog-introduction.component";
import OtherResources from "../blog-other-resources/blog-other-resources.component";
import ParagraphSection from "../paragraph-section/paragraph-section.component";
import Section from "../section/section.component";

import "./blog-section.styles.scss";

const BlogSection = ({ author, avatarImage }) => {
  return (
    <main className="blog-main">
      <section className="blog-main__brief">
        <ParagraphSection
          paragraphs={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.",
          ]}
        />
      </section>
      <BlogIntroduction />
      <BlogImage
        style={{ marginTop: "48px" }}
        imgURL="assets/Image.png"
        caption={
          <>
            Image courtesy of Laura Davidson via&nbsp;
            <a href="/" className="underline">
              Unsplash
            </a>
          </>
        }
      />
      <BlockQuote
        quote="In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear."
        author={author}
      />
      <BlogDetail />
      <Section heading={"Software and tools"}>
        <ParagraphSection
          paragraphs={[
            "Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.",
          ]}
        />
      </Section>
      <OtherResources />
      <BlogImage
        style={{ marginTop: "48px" }}
        imgURL="assets/lady-wearing-plad.png"
        caption={
          <>
            Image courtesy of Alex Loup via&nbsp;
            <a href="/" className="underline">
              Unsplash
            </a>
          </>
        }
      />
      <BlogConclusion />
      <AvatarSocialLinks author={author} authorImage={avatarImage} />
    </main>
  );
};

export default BlogSection;
