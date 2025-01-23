import React, { useState } from "react";

interface PaginationProps {
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages = 3 }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (page: number): void => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    
      <div className="flex items-center justify-center py-2 mb-10 ">
        {/* First Button */}
        <button
          aria-label="Go to first page"
          className={`font-montserrat py-3 px-4 border-[#BDBDBD] rounded-l-md shadow-md ${
            currentPage === 1
              ? "bg-[#F3F3F3] text-[#BDBDBD] cursor-not-allowed"
              : "bg-[#F3F3F3] text-[#BDBDBD] hover:bg-blue-100"
          }`}
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          First
        </button>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              aria-label={`Go to page ${page}`}
              className={`py-3 px-3 border-[#BDBDBD] shadow-md ${
                currentPage === page
                  ? "bg-[#23A6F0] text-[#ffffff]"
                  : "bg-[#ffffff] text-[#23A6F0] hover:bg-blue-100"
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          );
        })}

        {/* Next Button */}
        <button
          aria-label="Go to next page"
          className={`font-montserrat py-3 px-4 border-[#BDBDBD] rounded-r-md shadow-md ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-gray-100 text-blue-600 hover:bg-blue-100"
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

  );
};

export default Pagination;
