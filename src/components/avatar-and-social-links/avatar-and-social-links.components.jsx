import React from "react";

import { ReactComponent as Clipboard } from "../../assets/icons/copy.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter-lg.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook-lg.svg";
import { ReactComponent as LinkedIn } from "../../assets/icons/linkedIn-lg.svg";

import AvatarGroup from "../avatar-label-group/avatar-label-group.component";
import Button from "../button/button.component";

import "./avatar-and-social-links.styles.scss";

const AvatarSocialLinks = ({ author, authorImage }) => (
  <div className="avatar-social">
    <AvatarGroup
      author={author}
      date="Product Designer, Untitled"
      imageURL={authorImage}
    />
    <section aria-label="social links" className="social-links">
      <Button
        primary={false}
        className="btn--social"
        label={
          <>
            <Clipboard />
            &nbsp;Copy link
          </>
        }
      />

      <Button primary={false} label={<Twitter />} className="btn--social" />
      <Button primary={false} label={<Facebook />} className="btn--social" />
      <Button primary={false} label={<LinkedIn />} className="btn--social" />
    </section>
  </div>
);

export default AvatarSocialLinks;
