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

export const withOutLabel = Template.bind({});

withOutLabel.args = {
  type: "text",
  placeholder: "Enter your email",
  direction: "column",
  color: "var(--text-color-1)",
};

export const withLabel = Template.bind({});

withLabel.args = {
  ...withOutLabel.args,
  label: "Subscribe to our newsletter",
};
