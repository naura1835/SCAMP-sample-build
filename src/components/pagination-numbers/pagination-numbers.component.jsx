import React from "react";
import PaginationBtn from "../pagination-btn/pagination-btn.component";

import "./pagination-numbers.styles.scss";

const PaginationNumbers = () => {
  const buttons = [];
  for (let i = 1; i <= 10; i++) {
    if (i == 4 || i == 5 || i == 6) continue;
    if (i == 7) buttons.push("...");
    else
      buttons.push(
        <PaginationBtn
          className="pagination__number--btn"
          key={i}
          text={i}
        ></PaginationBtn>
      );
  }
  return <div className="pagination-numbers">{buttons}</div>;
};

export default PaginationNumbers;
