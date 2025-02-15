import { useFormContext } from "react-hook-form";
import { propertyTypes } from "../lib/constants/constants";
import { UltimateType } from "../models/types";

const RealEstateForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UltimateType>();

  return (
    <div className="flex flex-col gap-4">
      <div>
        <label
          htmlFor="propertyType"
          className="mt-2 block text-lg font-medium"
        >
          <span className="text-red-500 mr-2">*</span>Выберите категорию
          объявления
        </label>
        <select
          {...register("propertyType", {
            required: "Выберите категорию недвижимости",
          })}
          id="propertyType"
          className="w-full rounded-md border border-gray-200 p-2 placeholder:text-[#787774]"
          defaultValue=""
        >
          <option value="" disabled>
            Категория недвижимости
          </option>
          {propertyTypes.map((propertyType, index) => (
            <option key={index} value={propertyType}>
              {propertyType}
            </option>
          ))}
        </select>
        {errors.propertyType && (
          <p className="text-red-500">{errors.propertyType.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="area" className="mt-2 block text-lg font-medium">
          <span className="text-red-500 mr-2">*</span>Введите площадь в
          квадратных метрах
        </label>
        <input
          {...register("area", {
            required: "Введите площадь недвижимости",
            validate: (value) => {
              const number = Number(value);
              if (!Number.isFinite(number)) {
                return "Введите корректное значение";
              }
              if (number <= 0) {
                return "Значение должно быть больше 0";
              }
              if (!Number.isInteger(number)) {
                return "Значение должно быть целым числом";
              }
              return true;
            },
          })}
          id="area"
          className="w-full rounded-md border border-gray-200 p-2 placeholder:text-[#787774]"
          type="number"
          placeholder="100"
        />
        {errors.area && <p className="text-red-500">{errors.area.message}</p>}
      </div>

      <div>
        <label htmlFor="rooms" className="mt-2 block text-lg font-medium">
          <span className="text-red-500 mr-2">*</span>Введите количество комнат
        </label>
        <input
          {...register("rooms", {
            required: "Введите количество комнат",
            validate: (value) => {
              const number = Number(value);
              if (!Number.isFinite(number)) {
                return "Введите корректное значение";
              }
              if (number <= 0) {
                return "Значение должно быть больше 0";
              }
              if (!Number.isInteger(number)) {
                return "Значение должно быть целым числом";
              }
              return true;
            },
          })}
          id="rooms"
          className="w-full rounded-md border border-gray-200 p-2 placeholder:text-[#787774]"
          type="number"
          placeholder="3"
        />
        {errors.rooms && <p className="text-red-500">{errors.rooms.message}</p>}
      </div>

      <div>
        <label htmlFor="price" className="mt-2 block text-lg font-medium">
          <span className="text-red-500 mr-2">*</span>Введите цену недвижимости
          в рублях
        </label>
        <input
          {...register("price", {
            required: "Введите цену недвижимости",
            validate: (value) => {
              const number = Number(value);
              if (!Number.isFinite(number)) {
                return "Введите корректное значение";
              }
              if (number < 0) {
                return "Значение должно быть больше или равно 0";
              }
              if (!Number.isInteger(number)) {
                return "Значение должно быть целым числом";
              }
              return true;
            },
          })}
          id="price"
          className="w-full rounded-md border border-gray-200 p-2 placeholder:text-[#787774]"
          type="number"
          placeholder="15000000"
        />
        {errors.price && <p className="text-red-500">{errors.price.message}</p>}
      </div>
    </div>
  );
};

export default RealEstateForm;
