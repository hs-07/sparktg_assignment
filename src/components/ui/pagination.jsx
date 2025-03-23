import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getVisiblePages = () => {
    const visiblePages = [];

    // Always show the first page
    visiblePages.push(0);

    if (totalPages <= 5) {
      // If total pages are 5 or less, show all pages
      for (let i = 1; i <= totalPages; i++) {
        visiblePages.push(i);
      }
    } else {
      // Pages near the current page
      if (currentPage > 3) {
        visiblePages.push("...");
      }

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        visiblePages.push(i);
      }

      if (currentPage < totalPages - 2) {
        visiblePages.push("...");
      }

      // Always show the last page
      visiblePages.push(totalPages);
    }

    return visiblePages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex items-center justify-center space-x-2 font-poppins">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 0}
        className="px-3 py-2 h-8 rounded-lg border text-black border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transtion-all active:scale-95"
      >
        <FaArrowLeft />
      </button>
      <div className="flex divide-x divide-gray-400">
        {visiblePages.map((page, index) => (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 ${
              currentPage === page ? "text-black" : "text-gray-400"
            } ${page === "..." && "cursor-default"}`}
            disabled={page === "..."}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 h-8 rounded-lg border-gray-400 text-black border disabled:opacity-50 disabled:cursor-not-allowed flex gap-2 items-center transtion-all active:scale-95"
      >
        Next <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
