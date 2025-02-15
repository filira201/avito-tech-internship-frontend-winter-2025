import { useFormContext } from "react-hook-form";
import { serviceTypes } from "../lib/constants/constants";
import { UltimateType } from "../models/types";

const ServicesForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UltimateType>();

  return (
    <div className="flex flex-col gap-4">
      <div>
        <label htmlFor="serviceType" className="mt-2 block text-lg font-medium">
          <span className="text-red-500 mr-2">*</span>Выберите тип услуги
        </label>
        <select
          {...register("serviceType", {
            required: "Выберите тип услуги",
          })}
          id="serviceType"
          className="w-full rounded-md border border-gray-200 p-2 placeholder:text-[#787774]"
          defaultValue=""
        >
          <option value="" disabled>
            Тип услуги
          </option>
          {serviceTypes.map((serviceTypes, index) => (
            <option key={index} value={serviceTypes}>
              {serviceTypes}
            </option>
          ))}
        </select>
        {errors.serviceType && (
          <p className="text-red-500">{errors.serviceType.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="experience" className="mt-2 block text-lg font-medium">
          <span className="text-red-500 mr-2">*</span>Введите ваш опыт работы (в
          годах)
        </label>
        <input
          {...register("experience", {
            required: "Введите ваш опыт работы",
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
          id="experience"
          className="w-full rounded-md border border-gray-200 p-2 placeholder:text-[#787774]"
          type="number"
          placeholder="5"
        />
        {errors.experience && (
          <p className="text-red-500">{errors.experience.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="cost" className="mt-2 block text-lg font-medium">
          <span className="text-red-500 mr-2">*</span>Введите стоимость услуги в
          рублях
        </label>
        <input
          {...register("cost", {
            required: "Введите стоимость услуги",
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
          id="cost"
          className="w-full rounded-md border border-gray-200 p-2 placeholder:text-[#787774]"
          type="number"
          placeholder="50000"
        />
        {errors.cost && <p className="text-red-500">{errors.cost.message}</p>}
      </div>

      <div>
        <label
          htmlFor="workSchedule"
          className="mt-2 block text-lg font-medium"
        >
          Введите график работы
        </label>
        <input
          {...register("workSchedule")}
          id="workSchedule"
          className="w-full rounded-md border border-gray-200 p-2 placeholder:text-[#787774]"
          type="text"
          placeholder="Пн-Пт, 9:00-18:00"
        />
      </div>
    </div>
  );
};

export default ServicesForm;
