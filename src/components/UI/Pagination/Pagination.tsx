"use client";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const Pagination = ({ totalPages, currentPage }: { totalPages: number | undefined; currentPage: number }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  if (!totalPages) {
    return null;
  }

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 6;
    const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);

    let startPage = Math.max(currentPage - halfMaxPagesToShow, 1);
    let endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(endPage - maxPagesToShow + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`btn_pagination ${currentPage === i ? "bg-blue-500 text-white" : "bg-gray-300"}`}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-center text-black">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="btn_pagination"
      >
        ←
      </button>
      {currentPage > 4 && (
        <button onClick={() => handlePageChange(1)} className="btn_pagination">
          1
        </button>
      )}
      {currentPage > 5 && <span className="btn_pagination">...</span>}
      {renderPageNumbers()}
      {currentPage < totalPages - 2 && <span className="btn_pagination">...</span>}
      {currentPage < totalPages - 1 && (
        <button onClick={() => handlePageChange(totalPages)} className="btn_pagination">
          {totalPages}
        </button>
      )}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="btn_pagination"
      >
        →
      </button>
    </div>
  );
};

export default Pagination;
