import React from "react";
import Sidebar from "../components/sidebar/sidebar.component";

export default {
  title: "layout/Sidebar",
  component: Sidebar,
  argTypes: { handleChange: { action: "handleChange" } },
};

const Template = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
  categories: ["item 1", "item 2", "item 3", "item 4"],
};
