import React from "react";

interface PaginationProps {
  currentPage: number;
  maxPage: number;
  minPage: number;
  response: {
    totalPages: number;
    data: number[];
  };
}
const Pagination: React.FC<PaginationProps> = (props) => {
  const { currentPage, maxPage, minPage } = props;
  const totalPages = props.response.totalPages - 1;
  const data = props.response.data;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const pageNumbers = pages.map((page) => {
    if (page <= maxPageLimit && page > minPageLimit) {
      return (
        <li
          key={page}
          id={page}
          onClick={handlePageClick}
          className={currentPage === page ? "active" : null}
        >
          {page}
        </li>
      );
    } else {
      return null;
    }
  });

  // page ellipses
  let pageIncrementEllipses = null;
  if (pages.length > maxPageLimit) {
    pageIncrementEllipses = <li onClick={handleNextClick}>&hellip;</li>;
  }
  let pageDecremenEllipses = null;
  if (minPageLimit >= 1) {
    pageDecremenEllipses = <li onClick={handlePrevClick}>&hellip;</li>;
  }
  const renderData = (data) => {
    return (
      <ul>
        {data.map((d) => (
          <li key={d["_id"]}>
            {" "}
            The passenger having id {d["_id"].slice(
              d["_id"].length - 5
            )} using {d.airline[0].name} airlines
          </li>
        ))}
      </ul>
    );
  };
  return <div>Pagination</div>;
};

export default Pagination;
