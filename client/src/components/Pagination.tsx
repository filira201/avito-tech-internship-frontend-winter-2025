import { FC } from "react";
import { useSearchParams } from "react-router";
import { generatePagination } from "../lib/utils/utils";
import PaginationArrow from "./PaginationArrow";
import PaginationNumbers from "./PaginationNumbers";

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
    <div className="flex items-center justify-center gap-1 p-2">
      <PaginationArrow
        direction="left"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />

      <PaginationNumbers
        allPages={allPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />

      <PaginationArrow
        direction="right"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      />
    </div>
  );
};

export default Pagination;
