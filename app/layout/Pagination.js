/**
 * It takes in the current page number, the total number of pages, and the function to set the current
 * page number, and returns a list of page numbers to display in the pagination
 * @returns A pagination component that is being used to navigate through the pages of the application.
 */
import React from "react";
import UsePagination from "../utils/UsePagination";

const Pagination = ({ toPage, setToPage, totalPages }) => {
  const pages = UsePagination({ toPage: toPage, totalPages: totalPages });

  if (1 !== totalPages && totalPages !== 0) {
    return (
      <nav className='theme-pagination'>
        <ul className='pagination'>
          <li className='page-item'>
            <div className='page-link' aria-label='Previous' onClick={() => setToPage(1)}>
              <span aria-hidden='true'>«</span>
              <span className='sr-only'>Previous</span>
            </div>
          </li>
          <li className='page-item'>
            <div
              className='page-link'
              aria-label='Previous'
              onClick={() => {
                setToPage(toPage > 1 ? toPage - 1 : toPage);
              }}>
              <span aria-hidden='true'>{"<"}</span>
              <span className='sr-only'>Previous</span>
            </div>
          </li>
          {pages.map((data, i) => (
            <li
              className={`page-item ${data === toPage ? "active" : ""}`}
              key={i}
              onClick={() => {
                setToPage(data);
              }}>
              <div className='page-link'>{data}</div>
            </li>
          ))}

          <li className='page-item'>
            <div
              className='page-link'
              aria-label='Next'
              onClick={() => {
                setToPage(toPage < totalPages ? toPage + 1 : toPage);
              }}>
              <span aria-hidden='true'>{">"}</span>
              <span className='sr-only'>Next</span>
            </div>
          </li>
          <li className='page-item'>
            <div className='page-link' aria-label='Next' onClick={() => setToPage(totalPages)}>
              <span aria-hidden='true'>»</span>
              <span className='sr-only'>Next</span>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Pagination;
