export const categoriesFilter = [
  { id: "all", label: "Все" },
  { id: "auto", label: "Авто" },
  { id: "real-estate", label: "Недвижимость" },
  { id: "services", label: "Услуги" },
] as const;

export const categories = categoriesFilter
  .filter((category) => category.id !== "all")
  .map((category) => category.label);

export const propertyTypes = [
  "Квартира",
  "Дом",
  "Коттедж",
  "Отель",
  "Офис",
] as const;

export const serviceTypes = [
  "Ремонт",
  "Уборка",
  "Доставка",
  "Ремонт техники",
  "Строительство",
  "Логистика",
  "Дизайн",
  "Маркетинг",
  "Фото и видео съемка",
  "Репетиторство",
] as const;

export const carBrands = [
  "Toyota",
  "Ford",
  "BMW",
  "Mercedes-Benz",
  "Honda",
  "Audi",
  "Chevrolet",
  "Nissan",
  "Hyundai",
  "Volkswagen",
] as const;

export const ITEMS_PER_PAGE: number = 5;

export const FORM_STEPS: number = 3;

export const sizeClasses = {
  medium: "w-full h-56",
  large: "w-full h-96",
} as const;
