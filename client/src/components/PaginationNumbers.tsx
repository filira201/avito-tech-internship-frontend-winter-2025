import { FC } from "react";

interface PaginationNumbersProps {
  allPages: number[];
  currentPage: number;
  handlePageChange: (page: number) => void;
}

const PaginationNumbers: FC<PaginationNumbersProps> = ({
  allPages,
  currentPage,
  handlePageChange,
}) => {
  return (
    <div className="flex gap-2 overflow-x-auto whitespace-nowrap snap-x snap-mandatory px-1">
      {allPages.map((page, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(page)}
          className={`flex transition-colors cursor-pointer h-10 w-10 items-center justify-center text-sm rounded-md border border-gray-200 snap-start shrink-0 
            ${
              currentPage === page
                ? "bg-[#0582ff] text-white"
                : "hover:bg-[#f2f1f0]"
            }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default PaginationNumbers;
