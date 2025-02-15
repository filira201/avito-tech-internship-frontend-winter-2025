import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { FC } from "react";

interface PaginationArrowProps {
  onClick: () => void;
  disabled?: boolean;
  direction: "right" | "left";
}

const PaginationArrow: FC<PaginationArrowProps> = ({
  onClick,
  disabled,
  direction,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex transition-colors cursor-pointer h-10 w-10 items-center justify-center rounded-md border border-gray-200 shrink-0
        ${
          disabled === true
            ? "pointer-events-none bg-[#dddad6]"
            : "hover:bg-[#f2f1f0] active:bg-[#f2f1f0]"
        } ${direction === "right" ? "ml-2 md:ml-4" : "mr-2 md:mr-4"}`}
    >
      {direction === "left" ? (
        <ChevronLeftIcon className="size-6" />
      ) : (
        <ChevronRightIcon className="size-6" />
      )}
    </button>
  );
};

export default PaginationArrow;
