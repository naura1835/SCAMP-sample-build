import React from "react";

import useWindowSize from "../../custom-hooks/useWindowSize";

import CustomDropdown from "../custom-dropdown/custom-dropdown.component";
import Sidebar from "../sidebar/sidebar.component";

const BlogCategories = () => {
  const { width } = useWindowSize();

  const categories = [
    "view all",
    "design",
    "product",
    "software engineering",
    "customer success",
    "leadership",
    "management",
  ];

  return (
    <>
      {width < 900 ? (
        <CustomDropdown categories={categories} />
      ) : (
        <Sidebar categories={categories} />
      )}
    </>
  );
};

export default BlogCategories;
