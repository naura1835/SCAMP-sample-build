import React from "react";

import CustomDropdown from "../components/custom-dropdown/custom-dropdown.component";

export default {
  title: "form/Dropdown",
  component: CustomDropdown,
  argTypes: {
    categories: {
      type: { name: "array" },
      defaultValue: ["opt1", "opt2", "opt3", "opt4", "opt5", "opt6"],
    },
  },
};

export const Dropdown = (args) => <CustomDropdown {...args} />;
