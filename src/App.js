import { Route, Routes } from "react-router-dom";

import Header from "./components/header/header.component";
import BlogPostPage from "./pages/blog-post/blog-post.component";
import ListingPage from "./pages/listing/listing.component";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
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
