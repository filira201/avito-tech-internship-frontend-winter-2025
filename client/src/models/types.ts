type GeneralAdvertisement = {
  id: number;
  name: string;
  description: string;
  location: string;
  type: AdvertisementType;
  image?: string;
};

type AdvertisementType = "Недвижимость" | "Авто" | "Услуги";

type RealEstate = GeneralAdvertisement & {
  type: "Недвижимость";
  propertyType: string;
  area: number;
  rooms: number;
  price: number;
};

type Auto = GeneralAdvertisement & {
  type: "Авто";
  brand: string;
  model: string;
  year: number;
  mileage?: number;
};

type Services = GeneralAdvertisement & {
  type: "Услуги";
  serviceType: string;
  experience: number;
  cost: number;
  workSchedule?: string;
};

export type Advertisement = RealEstate | Auto | Services;
