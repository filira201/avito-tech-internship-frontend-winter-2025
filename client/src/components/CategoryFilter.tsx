import { useSearchParams } from "react-router";
import { categories } from "../lib/constants/constants";
import CategoryFilterRadioButton from "./CategoryFilterRadioButton";
import { Category } from "../models/types";

const CategoryFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = (searchParams.get("category") ||
    "all") as Category["id"];

  const handleCategoryChange = (categoryId: Category["id"]) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    if (categoryId === "all") {
      params.delete("category");
    } else {
      params.set("category", categoryId);
    }
    setSearchParams(params);
  };

  return (
    <div className="mb-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:gap-4 lg:grid-cols-4">
      {categories.map((category) => (
        <CategoryFilterRadioButton
          key={category.id}
          category={category}
          currentCategory={currentCategory}
          handleCategoryChange={handleCategoryChange}
        />
      ))}
    </div>
  );
};

export default CategoryFilter;
