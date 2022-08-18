import React from "react";

import BadgeGroup from "../components/badge-group/badge-group.component";

export default {
  title: "Badge",
  component: BadgeGroup,
};

const Template = (args) => <BadgeGroup {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  badge: "Presentation",
  backgroundColor: "#fdf2fa",
  color: "#c11574",
};

export const Secondary = Template.bind({});
Secondary.args = {
  badge: "Design",
  message: "8 min read",
  padding: "4px 10px 4px 4px",
};
