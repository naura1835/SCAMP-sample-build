import React from "react";

import useWindowSize from "../../custom-hooks/useWindowSize";

import PaginationBtn from "../pagination-btn/pagination-btn.component";
import PaginationNumbers from "../pagination-numbers/pagination-numbers.component";

import { ReactComponent as ArrowLeft } from "../../assets/icons/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";

import "./pagination.styles.scss";

const Pagination = () => {
  const { width } = useWindowSize();
  return (
    <section aria-label="pagination" className="pagination">
      <PaginationBtn text="Previous">
        <ArrowLeft />
      </PaginationBtn>
      {width < 900 ? (
        <span className="medium-text pagination__details">Page 1 of 10</span>
      ) : (
        <>
          <PaginationNumbers />
        </>
      )}
      <PaginationBtn text="Next">
        <ArrowRight />
      </PaginationBtn>
    </section>
  );
};

export default Pagination;
