import { FC } from "react";
import { useSearchParams } from "react-router";
import { generatePagination } from "../utils/utils";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

const Pagination: FC<PaginationProps> = ({ totalPages, currentPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    searchParams.set("page", page.toString());
    setSearchParams(searchParams);
  };

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <div className="flex justify-center gap-2">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded-md disabled:opacity-50"
      >
        Назад
      </button>

      {allPages.map((page, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(page as number)}
          className={`px-3 py-1 border rounded-md ${
            currentPage === page ? "bg-blue-500 text-white" : ""
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="px-3 py-1 border rounded-md disabled:opacity-50"
      >
        Вперед
      </button>
    </div>
  );
};

export default Pagination;
