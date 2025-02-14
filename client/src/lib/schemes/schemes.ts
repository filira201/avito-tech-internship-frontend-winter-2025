import { z } from "zod";

const stringMin = (min: number, message: string) =>
  z.string().trim().min(min, { message });

const positiveNumber = (message: string) => z.number().positive({ message });

export const BaseSchema = z.object({
  name: stringMin(1, "Введите название объявления"),
  description: stringMin(1, "Введите описание"),
  location: stringMin(1, "Введите локацию"),
  image: z.string().optional(),
  type: z.enum(["Недвижимость", "Авто", "Услуги"], {
    errorMap: () => ({ message: "Выберите категорию" }),
  }),
});

export const RealEstateSchema = BaseSchema.extend({
  propertyType: stringMin(1, "Введите тип недвижимости"),
  area: positiveNumber("Площадь должна быть положительным числом"),
  rooms: z.number().min(1, { message: "Минимум одна комната" }),
  price: positiveNumber("Цена должна быть положительным числом"),
});

export const AutoSchema = BaseSchema.extend({
  brand: stringMin(1, "Введите марку автомобиля"),
  model: stringMin(1, "Введите модель автомобиля"),
  year: z
    .number()
    .max(new Date().getFullYear(), { message: "Некорректный год" }),
  mileage: z.number().nonnegative().optional(),
});

export const ServicesSchema = BaseSchema.extend({
  serviceType: stringMin(1, "Введите тип услуги"),
  experience: z
    .number()
    .min(0, { message: "Опыт не может быть отрицательным" }),
  cost: positiveNumber("Стоимость должна быть положительной"),
  schedule: z.string().optional(),
});
