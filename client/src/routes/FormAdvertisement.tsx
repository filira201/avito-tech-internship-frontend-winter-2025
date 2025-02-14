import { useForm, SubmitHandler } from "react-hook-form";
import { TypeAdvertisement } from "../models/types";
import { advertisementApi } from "../services/AdvertisementService";
import { BaseSchema } from "../lib/schemes/schemes";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type FormField = z.infer<typeof BaseSchema>;

const FormAdvertisement = () => {
  const [createAdvertisement] =
    advertisementApi.useCreateAdvertisementMutation();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormField>({
    defaultValues: { location: "Ижевск" },
    resolver: zodResolver(BaseSchema),
  });

  const onSubmit: SubmitHandler<FormField> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await createAdvertisement(data as TypeAdvertisement);
      if (response.error) {
        throw new Error("Ошибка");
      }
    } catch (error) {
      console.log(error);
      setError("root", {
        message: "SSSSS",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 mt-10"
    >
      <input
        {...register("name")}
        className="p-2 border border-zinc-600 rounded-lg"
        type="text"
        placeholder="name"
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      <input
        {...register("description")}
        className="p-2 border border-zinc-600 rounded-lg"
        type="text"
        placeholder="description"
      />
      {errors.description && (
        <p className="text-red-500">{errors.description.message}</p>
      )}
      <input
        {...register("location")}
        className="p-2 border border-zinc-600 rounded-lg"
        type="text"
        placeholder="location"
      />
      {errors.location && (
        <p className="text-red-500">{errors.location.message}</p>
      )}
      <input
        {...register("type")}
        className="p-2 border border-zinc-600 rounded-lg"
        type="text"
        placeholder="type"
      />
      {errors.type && <p className="text-red-500">{errors.type.message}</p>}
      <button
        disabled={isSubmitting}
        className={`${
          isSubmitting ? "bg-amber-300" : "bg-green-500"
        } border border-gray-200 p-4 rounded-lg`}
        type="submit"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
      {errors.root && <p className="text-red-500">{errors.root.message}</p>}
    </form>
  );
};

export default FormAdvertisement;

// import { TypeAdvertisement } from "../models/types";
// import { advertisementApi } from "../services/AdvertisementService";

// const FormAdvertisement = () => {
//   const [createAdvertisement] =
//     advertisementApi.useCreateAdvertisementMutation();

//   const handleCreate = async () => {
//     const obj = {
//       name: "DSAKDKLASDKJLAKJDLAJKLDAKLJjkl",
//       description: "Просторная квартира в центре города",
//       location: "Москва",
//       type: "Недвижимость",
//       image:
//         "https://www.alfaplan.ru/upload/information_system_33/1/8/4/item_1846/information_items_property_254476.webp",
//       propertyType: "Квартира",
//       area: 100,
//       rooms: 3,
//       price: 15000000,
//     } as const;
//     await createAdvertisement(obj as TypeAdvertisement);
//   };

//   return (
//     <div>
//       <h2>Form</h2>
//       <button
//         className="border border-violet-500 p-10 cursor-pointer"
//         onClick={handleCreate}
//       >
//         Добавить новое объявление
//       </button>
//     </div>
//   );
// };

// export default FormAdvertisement;
