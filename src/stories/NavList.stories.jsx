import NavList from "../components/nav-list/nav-list.component";

export default {
  title: "Nav List",
  component: NavList,
  //   subcomponents: { NavListItem },
};

const Template = ({ items, ...args }) => (
  <NavList {...args}>
    {items.map((item) => ({
      /* <NavListItem {...item} /> */
    }))}
  </NavList>
);
