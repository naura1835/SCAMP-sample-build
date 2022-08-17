import React from "react";

import CustomInput from "../components/custom-input/custom-input.component";

export default {
  title: "form/Form Input",
  component: CustomInput,
};

const Template = (args) => <CustomInput {...args} />;

export const Search = Template.bind({});

Search.args = {
  type: "search",
  placeholder: "Search",
};

export const Email = Template.bind({});

Email.args = {
  type: "text",
  label: "Subscribe to our newsletter",
  placeholder: "Enter your email",
  direction: "column",
  color: "var(--text-color-1)",
};
