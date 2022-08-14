import React from "react";

import Button from "../components/button/button.component";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: "Primary button",
};

export const Secondary = Template.bind({});

Secondary.args = {
  primary: false,
  label: "Secondary btn",
};

export const FlatButton = Template.bind({});

FlatButton.args = {
  primary: false,
  label: "Flat button",
  className: "btn--flat",
};
