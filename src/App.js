import { Route, Routes } from "react-router-dom";

import { ReactComponent as Logo } from "./assets/icons/logo.svg";

import Header from "./components/header/header.component";
import BlogPostPage from "./pages/blog-post/blog-post.component";
import ListingPage from "./pages/listing/listing.component";

import "./App.scss";

const App = () => {
  const headerData = [
    { title: "Home", className: "nav-list__item--horizontal" },
    {
      title: "resources",
      className: "nav-list__item--horizontal",
      isDropdown: true,
    },
    {
      title: "resources",
      className: "nav-list__item--horizontal",
      isDropdown: true,
    },
    { title: "Pricing", className: "nav-list__item--horizontal" },
  ];
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Header logo={<Logo />} navItems={headerData} />}
        >
          <Route index element={<ListingPage />} />
          <Route path="/blog-post" element={<BlogPostPage />}>
            <Route path=":blogId" element={<BlogPostPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
