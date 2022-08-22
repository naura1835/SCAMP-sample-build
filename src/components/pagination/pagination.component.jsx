import React from "react";

import useWindowSize from "../../custom-hooks/useWindowSize";

import { ReactComponent as ArrowLeft } from "../../assets/icons/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";

import Button from "../button/button.component";

import "./pagination.styles.scss";

const Pagination = () => {
  const { width } = useWindowSize();
  const buttons = [];

  const previous = width >= 900 && (
    <span className="medium-text">Previous</span>
  );
  const next = width >= 900 && <span className="medium-text">Next</span>;

  for (let i = 1; i <= 10; i++) {
    if (i === 4 || i === 5 || i === 6) continue;
    if (i === 7) buttons.push("...");
    else
      buttons.push(
        <Button
          key={i}
          primary={false}
          className="pagination__btn-group__btn"
          label={i.toString()}
        />
      );
  }

  return (
    <section aria-label="pagination" className="pagination">
      <Button
        primary={false}
        className="pagination__helper-btn"
        label={
          <>
            <ArrowLeft />
            {previous}
          </>
        }
      />
      {width < 900 ? (
        <span className="medium-text pagination__details">Page 1 of 10</span>
      ) : (
        <div className="pagination__btn-group">{buttons}</div>
      )}
      <Button
        primary={false}
        className="pagination__helper-btn"
        label={
          <>
            {next}
            <ArrowRight />
          </>
        }
      />
    </section>
  );
};

export default Pagination;
