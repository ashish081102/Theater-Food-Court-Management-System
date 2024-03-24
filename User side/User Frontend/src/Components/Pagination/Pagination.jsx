import React from "react";
import "./Pagination.css";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        <li className="pg-action" onClick={() => paginate(currentPage - 1)}>
          <BsChevronLeft />
        </li>
        <li>
          {currentPage} of {Math.ceil(totalPosts / postsPerPage)}
        </li>
        <li className="pg-action" onClick={() => paginate(currentPage + 1)}>
          <BsChevronRight />
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
