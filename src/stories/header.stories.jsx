import React from "react";

import Header from "../components/header/header.component";

export default {
  title: "layout/Header",
  component: Header,
  decorators: [
    (Story) => (
      <div style={{ margin: "4em" }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = (args) => <Header {...args} />;
