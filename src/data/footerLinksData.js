import BadgeGroup from "../components/badge-group/badge-group.component";

export const ListingPageFooterC1 = ["Overview", "Careers", "Features"];
export const ListingPageFooterC2 = ["Help", "Pricing", "Pricing"];
export const links = ["Terms", "Privacy", "Cookies"];

export const BlogPageFooterC1 = [
  "Overview",
  "Features",
  <>
    Solutions&nbsp;
    <BadgeGroup
      badge="New"
      backgroundColor="rgba(255, 255, 255, 0.2)"
      color="#ffffff"
      otherStyle={{
        display: "inline",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        padding: "2px 8px",
        width: "fit-content",
        height: "22px",
      }}
    />
  </>,
  "Tutorials",
  "Pricing",
  "Release",
];

export const BlogPageFooterC2 = [
  "Blog",
  "Newsletter",
  "Events",
  "Help Center",
  "Tutorials",
  "Support",
];
