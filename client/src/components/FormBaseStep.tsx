import { useFormContext } from "react-hook-form";
import { UltimateType } from "../models/types";
import { categories } from "../lib/constants/constants";
import AdvertisementImage from "./AdvertisementImage";

const FormBaseStep = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<UltimateType>();

  const imageLink = watch("image");

  return (
    <div className="flex flex-col gap-4">
      <div className="border border-[#0000001a]">
        <AdvertisementImage
          imageUrl={imageLink}
          alt="Изображение объявления"
          size="large"
        />
      </div>
      <div>
        <label htmlFor="imageURL" className="mt-2 block text-lg font-medium">
          Вставьте URL изображения
        </label>
        <input
          {...register("image")}
          id="imageURL"
          className="w-full rounded-md border border-gray-200 p-2 placeholder:text-[#787774]"
          type="text"
          placeholder="URL изображения"
        />
      </div>

      <div>
        <label htmlFor="name" className="mt-2 block text-lg font-medium">
          <span className="text-red-500 mr-2">*</span>Введите название
          объявления
        </label>
        <input
          {...register("name", {
            required: "Введите название объявления",
            maxLength: {
              value: 1000,
              message: "Название объявления не должно превышать 1000 символов",
            },
          })}
          id="name"
          className="w-full rounded-md border border-gray-200 p-2 placeholder:text-[#787774]"
          type="text"
          placeholder="Квартира в центре"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="description" className="mt-2 block text-lg font-medium">
          <span className="text-red-500 mr-2">*</span>Введите описание
          объявления
        </label>
        <textarea
          {...register("description", {
            required: "Введите описание объявления",
            maxLength: {
              value: 10000,
              message: "Описание объявления не должно превышать 10000 символов",
            },
          })}
          id="description"
          className="w-full rounded-md border border-gray-200 p-2 placeholder:text-[#787774]"
          rows={2}
          placeholder="Просторная квартира в центре города"
        ></textarea>
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="location" className="mt-2 block text-lg font-medium">
          <span className="text-red-500 mr-2">*</span>Введите расположение
        </label>
        <input
          {...register("location", {
            required: "Введите локацию",
            maxLength: {
              value: 1000,
              message: "Расположение локации не должно превышать 1000 символов",
            },
          })}
          id="location"
          className="w-full rounded-md border border-gray-200 p-2 placeholder:text-[#787774]"
          type="text"
          placeholder="Москва"
        />
        {errors.location && (
          <p className="text-red-500">{errors.location.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="type" className="mt-2 block text-lg font-medium">
          <span className="text-red-500 mr-2">*</span>Выберите категорию
          объявления
        </label>
        <select
          {...register("type", { required: "Выберите категорию объявления" })}
          id="type"
          className="w-full rounded-md border border-gray-200 p-2 placeholder:text-[#787774]"
          defaultValue=""
        >
          <option value="" disabled>
            Категория объявления
          </option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.type && <p className="text-red-500">{errors.type.message}</p>}
      </div>
    </div>
  );
};

export default FormBaseStep;
