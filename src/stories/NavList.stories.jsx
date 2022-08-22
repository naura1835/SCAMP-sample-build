import React from "react";

import NavList from "../components/nav-list/nav-list.component";

import * as NavItemStories from "./NavItem.stories";

export default {
  title: "components/NavList",
  component: NavList,
};

const Template = (args) => <NavList {...args} />;

export const Horizontal = Template.bind({});

Horizontal.args = {
  mode: "horizontal",
  items: [
    {
      ...NavItemStories.Default.args,
      className: "nav-list__item--horizontal",
      title: "link 1",
      isDropdown: false,
    },
    {
      ...NavItemStories.Default.args,
      className: "nav-list__item--horizontal",
      title: "link 2",
      isDropdown: true,
    },
    {
      ...NavItemStories.Default.args,
      className: "nav-list__item--horizontal",
      title: "link 3",
      isDropdown: true,
    },
    {
      ...NavItemStories.Default.args,
      className: "nav-list__item--horizontal",
      title: "link 4",
    },
  ],
};

export const Vertical = Template.bind({});
Vertical.args = {
  mode: "vertical",
  items: [
    {
      ...NavItemStories.Default.args,
      title: "link 1",
    },
    {
      ...NavItemStories.Default.args,
      title: "link 2",
      isDropdown: true,
    },
    {
      ...NavItemStories.Default.args,
      title: "link 3",
      isDropdown: true,
    },
    {
      ...NavItemStories.Default.args,
      title: "link 4",
    },
  ],
};
