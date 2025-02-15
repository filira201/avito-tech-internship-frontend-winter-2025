import { FC } from "react";
import { CategoryFilterType } from "../models/types";

interface CategoryFilterRadioButtonProps {
  category: CategoryFilterType;
  currentCategory: CategoryFilterType["id"];
  handleCategoryChange: (categoryId: CategoryFilterType["id"]) => void;
}

const CategoryFilterRadioButton: FC<CategoryFilterRadioButtonProps> = ({
  category,
  currentCategory,
  handleCategoryChange,
}) => {
  return (
    <label
      className={`cursor-pointer font-medium flex items-center justify-center rounded-lg  pt-[10px] px-5 pb-3 transition-colors sm:min-w-44
        ${
          currentCategory === category.id
            ? "bg-[#02d15c] text-white"
            : "bg-[#f2f1f0] hover:bg-[#ebeae8] active:bg-[#ebeae8]"
        }`}
    >
      <input
        type="radio"
        name="category"
        value={category.id}
        checked={currentCategory === category.id}
        onChange={() => handleCategoryChange(category.id)}
        className="sr-only"
      />
      {category.label}
    </label>
  );
};

export default CategoryFilterRadioButton;
