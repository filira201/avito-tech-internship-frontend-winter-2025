import { useSearchParams } from "react-router";
import { advertisementApi } from "../services/AdvertisementService";
import Advertisement from "./Advertisement";
import { Category } from "../models/types";
import Pagination from "./Pagination";
import { ITEMS_PER_PAGE } from "../constants/categories";
import {
  calculateFilterAdvertisements,
  calculatePaginateAdvertisements,
  calculateSearchAdvertisements,
} from "../utils/utils";

const AdvertisementsWrapper = () => {
  const [searchParams] = useSearchParams();

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

  const searchQuery = searchParams.get("query") || "";
  const category = (searchParams.get("category") || "all") as Category["id"];
  const page = Number(searchParams.get("page")) || 1;

  const filteredAdvertisements = calculateFilterAdvertisements(
    advertisements,
    category
  );
  const searchedAdvertisements = calculateSearchAdvertisements(
    filteredAdvertisements,
    searchQuery
  );
  const totalPages = Math.ceil(searchedAdvertisements.length / ITEMS_PER_PAGE);
  const paginatedAdvertisements = calculatePaginateAdvertisements(
    searchedAdvertisements,
    page
  );

  return (
    <>
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedAdvertisements.map((advertisement) => (
          <Advertisement key={advertisement.id} advertisement={advertisement} />
        ))}
      </div>
      {paginatedAdvertisements.length ? (
        <Pagination totalPages={totalPages} currentPage={page} />
      ) : (
        <h1>объявлений не найдено</h1>
      )}
    </>
  );
};

export default AdvertisementsWrapper;
