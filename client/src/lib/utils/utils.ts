import { ITEMS_PER_PAGE } from "../constants/constants";
import { CategoryFilterType, TypeAdvertisement } from "../../models/types";

export const calculateFilterAdvertisements = (
  advertisements: TypeAdvertisement[],
  category: CategoryFilterType["id"]
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
): number[] => {
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

export const getYearsLabel = (years: number): string => {
  if (years % 10 === 1 && years % 100 !== 11) return "год";
  if ([2, 3, 4].includes(years % 10) && ![12, 13, 14].includes(years % 100))
    return "года";
  return "лет";
};

export const formattedNumber = (price: number) => {
  return price.toLocaleString("ru-RU");
};
