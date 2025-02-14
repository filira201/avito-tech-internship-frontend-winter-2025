export const categories = [
  { id: "all", label: "Все" },
  { id: "auto", label: "Авто" },
  { id: "real-estate", label: "Недвижимость" },
  { id: "services", label: "Услуги" },
] as const;

export const ITEMS_PER_PAGE: number = 500;

export const sizeClasses = {
  medium: "w-full h-56",
  large: "w-full h-96",
} as const;
