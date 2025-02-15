import { useFormContext } from "react-hook-form";
import { carBrands } from "../lib/constants/constants";
import { UltimateType } from "../models/types";

const AutoForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UltimateType>();

  return (
    <div className="flex flex-col gap-4">
      <div>
        <label htmlFor="brand" className="mt-2 block text-lg font-medium">
          <span className="text-red-500 mr-2">*</span>Выберите марку автомобиля
        </label>
        <select
          {...register("brand", {
            required: "Выберите марку автомобиля",
          })}
          id="brand"
          className="w-full rounded-md border border-gray-200 p-2 placeholder:text-[#787774]"
          defaultValue=""
        >
          <option value="" disabled>
            Марка автомобиля
          </option>
          {carBrands.map((carBrand, index) => (
            <option key={index} value={carBrand}>
              {carBrand}
            </option>
          ))}
        </select>
        {errors.brand && <p className="text-red-500">{errors.brand.message}</p>}
      </div>

      <div>
        <label htmlFor="model" className="mt-2 block text-lg font-medium">
          <span className="text-red-500 mr-2">*</span>Введите модель автомобиля
        </label>
        <input
          {...register("model", {
            required: "Введите модель автомобиля",
            maxLength: {
              value: 200,
              message: "Модель автомобиля не должна превышать 200 символов",
            },
          })}
          id="model"
          className="w-full rounded-md border border-gray-200 p-2 placeholder:text-[#787774]"
          type="text"
          placeholder="Camry"
        />
        {errors.model && <p className="text-red-500">{errors.model.message}</p>}
      </div>

      <div>
        <label htmlFor="year" className="mt-2 block text-lg font-medium">
          <span className="text-red-500 mr-2">*</span>Введите год выпуска
        </label>
        <input
          {...register("year", {
            required: "Введите год выпуска",
            validate: (value) => {
              const number = Number(value);
              if (!Number.isFinite(number)) {
                return "Введите корректное значение";
              }
              if (number <= 0) {
                return "Значение должно быть больше 0";
              }
              if (number > new Date().getFullYear()) {
                return "Значение не может превышать текущий год";
              }
              if (!Number.isInteger(number)) {
                return "Значение должно быть целым числом";
              }
              return true;
            },
          })}
          id="year"
          className="w-full rounded-md border border-gray-200 p-2 placeholder:text-[#787774]"
          type="number"
          placeholder="2020"
        />
        {errors.year && <p className="text-red-500">{errors.year.message}</p>}
      </div>

      <div>
        <label htmlFor="mileage" className="mt-2 block text-lg font-medium">
          Введите пробег в километрах
        </label>
        <input
          {...register("mileage")}
          id="mileage"
          className="w-full rounded-md border border-gray-200 p-2 placeholder:text-[#787774]"
          type="text"
          placeholder="15000"
        />
      </div>
    </div>
  );
};

export default AutoForm;
