import { advertisementApi } from "../services/AdvertisementService";
import Advertisement from "./Advertisement";

const AdvertisementsWrapper = () => {
  const {
    data: advertisements,
    isLoading,
    isFetching,
    error,
  } = advertisementApi.useGetAllAdvertisementsQuery();

  if (isLoading) return <h2>Loading...</h2>;
  if (isFetching) return <h2>Fetching...</h2>;
  if (error) return <h2>Error </h2>;
  if (!advertisements?.length) return <h2>No Data</h2>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {advertisements.map((advertisement) => (
        <Advertisement key={advertisement.id} advertisement={advertisement} />
      ))}
    </div>
  );
};

export default AdvertisementsWrapper;
