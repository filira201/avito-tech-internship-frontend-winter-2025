import { z } from "zod";

const stringMinAndMax = (
  min: number,
  max: number,
  messageMin: string,
  messageMax: string
) =>
  z
    .string()
    .trim()
    .min(min, { message: messageMin })
    .max(max, { message: messageMax });

const positiveNumber = (message: string) => z.number().positive({ message });

export const BaseSchema = z.object({
  name: stringMinAndMax(
    1,
    1000,
    "Введите название объявления",
    "Название объявления должно быть не длинее 1000 символов"
  ),
  description: stringMinAndMax(
    1,
    10000,
    "Введите описание",
    "Описание объявления должно быть не длинее 10000 символов"
  ),
  location: stringMinAndMax(
    1,
    1000,
    "Введите локацию",
    "Расположение локации должно быть не длинее 1000 символов"
  ),
  type: z.enum(["Недвижимость", "Авто", "Услуги"], {
    errorMap: () => ({ message: "Выберите категорию" }),
  }),
  image: z.string().optional(),
});

export const RealEstateSchema = BaseSchema.extend({
  propertyType: stringMinAndMax(
    1,
    1000,
    "Введите тип недвижимости",
    "Тип недвижимости должен быть не длинее 1000 символов"
  ),
  area: positiveNumber("Площадь должна быть положительным числом"),
  rooms: z.number().min(1, { message: "Минимум одна комната" }),
  price: positiveNumber("Цена должна быть положительным числом"),
});

export const AutoSchema = BaseSchema.extend({
  brand: stringMinAndMax(
    1,
    200,
    "Введите марку автомобиля",
    "Марка автомобиля должна быть не длинее 200 символов"
  ),
  model: stringMinAndMax(
    1,
    200,
    "Введите модель автомобиля",
    "Модель автомобиля должна быть не длинее 200 символов"
  ),
  year: z
    .number()
    .max(new Date().getFullYear(), { message: "Некорректный год" }),
  mileage: z.number().nonnegative().optional(),
});

export const ServicesSchema = BaseSchema.extend({
  serviceType: stringMinAndMax(
    1,
    1000,
    "Введите тип услуги",
    "Тип услуги должен быть не длинее 1000 символов"
  ),
  experience: z
    .number()
    .min(0, { message: "Опыт не может быть отрицательным" }),
  cost: positiveNumber("Стоимость должна быть положительной"),
  workSchedule: z.string().optional(),
});
