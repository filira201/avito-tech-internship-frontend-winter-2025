import AdvertisementsWrapper from "../components/AdvertisementsWrapper";
import CreateAdvertisementButton from "../components/CreateAdvertisementButton";
import Search from "../components/Search";

const Advertisements = () => {
  return (
    <div className="w-full max-w-[1252px] mx-auto mt-10">
      <h1 className="text-3xl font-semibold mb-6">Список объявлений</h1>

      <div className="flex justify-between items-center mb-8 gap-2">
        <Search />
        <CreateAdvertisementButton />
      </div>

      <AdvertisementsWrapper />
    </div>
  );
};

export default Advertisements;
