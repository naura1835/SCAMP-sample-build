import React from "react";

import "./hero-section.styles.scss";

const HeroSection = ({ children }) => (
  <header className="hero-section">{children}</header>
);

export default HeroSection;
