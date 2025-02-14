import { TypeAdvertisement } from "../models/types";
import { advertisementApi } from "../services/AdvertisementService";

const FormAdvertisement = () => {
  const [createAdvertisement] =
    advertisementApi.useCreateAdvertisementMutation();

  const handleCreate = async () => {
    const obj = {
      name: "DSAKDKLASDKJLAKJDLAJKLDAKLJjkl",
      description: "Просторная квартира в центре города",
      location: "Москва",
      type: "Недвижимость",
      image:
        "https://www.alfaplan.ru/upload/information_system_33/1/8/4/item_1846/information_items_property_254476.webp",
      propertyType: "Квартира",
      area: 100,
      rooms: 3,
      price: 15000000,
    } as const;
    await createAdvertisement(obj as TypeAdvertisement);
  };

  return (
    <div>
      <h2>Form</h2>
      <button
        className="border border-violet-500 p-10 cursor-pointer"
        onClick={handleCreate}
      >
        Добавить новое объявление
      </button>
    </div>
  );
};

export default FormAdvertisement;
