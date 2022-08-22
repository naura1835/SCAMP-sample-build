import React from "react";

import { NavListItem } from "../components/nav-list/nav-list.component";

export default {
  title: "components/NavItem",
  component: NavListItem,
};

const Template = (args) => <NavListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  isDropdown: false,
  title: "Link 1",
};

export const NavItemDropdown = Template.bind({});
NavItemDropdown.args = {
  isDropdown: true,
  title: "Link 2",
};
