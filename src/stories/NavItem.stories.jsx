import { NavListItem } from "../components/nav-list/nav-list.component";

export default {
  title: "Nav Item",
  component: NavListItem,
};

const Template = (args) => <NavListItem {...args} />;

export const NavItem = Template.bind({});
NavItem.args = {
  isDropdown: false,
  text: "Link 1",
};

export const NavItemDropdown = Template.bind({});
NavItemDropdown.args = {
  isDropdown: true,
  text: "Link 2",
};
