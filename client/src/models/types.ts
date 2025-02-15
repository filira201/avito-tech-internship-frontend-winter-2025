import {
  carBrands,
  categoriesFilter,
  propertyTypes,
  serviceTypes,
} from "../lib/constants/constants";

type GeneralAdvertisement = {
  id: number;
  name: string;
  description: string;
  location: string;
  type: AdvertisementType;
  image?: string;
};

type AdvertisementType = Exclude<
  (typeof categoriesFilter)[number]["label"],
  "Все"
>;

type ServiceType = (typeof serviceTypes)[number];

type PropertyType = (typeof propertyTypes)[number];

type CarBrandsType = (typeof carBrands)[number];

type RealEstate = GeneralAdvertisement & {
  type: "Недвижимость";
  propertyType: PropertyType;
  area: number;
  rooms: number;
  price: number;
};

type Auto = GeneralAdvertisement & {
  type: "Авто";
  brand: CarBrandsType;
  model: string;
  year: number;
  mileage?: number;
};

type Services = GeneralAdvertisement & {
  type: "Услуги";
  serviceType: ServiceType;
  experience: number;
  cost: number;
  workSchedule?: string;
};

export type AdvertisementImageSize = "medium" | "large";

export type CategoryFilterType = (typeof categoriesFilter)[number];

export type TypeAdvertisement = RealEstate | Auto | Services;

export type UltimateType = GeneralAdvertisement & {
  propertyType: PropertyType;
  area: number;
  rooms: number;
  price: number;

  brand: CarBrandsType;
  model: string;
  year: number;
  mileage?: number;

  serviceType: ServiceType;
  experience: number;
  cost: number;
  workSchedule?: string;
};
