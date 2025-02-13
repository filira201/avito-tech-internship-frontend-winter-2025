import { ITEMS_PER_PAGE } from "../constants/categories";
import { Category, TypeAdvertisement } from "../models/types";

export const calculateFilterAdvertisements = (
  advertisements: TypeAdvertisement[],
  category: Category["id"]
) => {
  if (category === "all") return advertisements;

  return advertisements.filter((advertisement) => {
    if (category === "auto") return advertisement.type === "Авто";
    if (category === "real-estate")
      return advertisement.type === "Недвижимость";
    if (category === "services") return advertisement.type === "Услуги";
    return false;
  });
};

export const calculateSearchAdvertisements = (
  advertisements: TypeAdvertisement[],
  query: string
) => {
  return advertisements.filter((advertisement) =>
    advertisement.name.toLowerCase().includes(query.toLowerCase())
  );
};

export const calculatePaginateAdvertisements = (
  advertisements: TypeAdvertisement[],
  page: number
) => {
  return advertisements.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );
};

export const generatePagination = (
  currentPage: number,
  totalPages: number
): (number | string)[] => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, totalPages - 1, totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [1, 2, totalPages - 2, totalPages - 1, totalPages];
  }

  return [1, currentPage - 1, currentPage, currentPage + 1, totalPages];
};
