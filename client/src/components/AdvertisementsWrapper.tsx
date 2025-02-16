import { useSearchParams } from "react-router";
import { advertisementApi } from "../services/AdvertisementService";
import Advertisement from "./Advertisement";
import { CategoryFilterType } from "../models/types";
import Pagination from "./Pagination";
import { ITEMS_PER_PAGE } from "../lib/constants/constants";
import {
  calculateFilterAdvertisements,
  calculatePaginateAdvertisements,
  calculateSearchAdvertisements,
} from "../lib/utils/utils";
import ErrorPage from "./Error.page";
import Loader from "./Loader";

const AdvertisementsWrapper = () => {
  const [searchParams] = useSearchParams();

  const {
    data: advertisements,
    isLoading,
    isFetching,
    error,
  } = advertisementApi.useGetAllAdvertisementsQuery();

  if (isLoading || isFetching) return <Loader />;
  if (error) return <ErrorPage error={error} />;
  if (!advertisements?.length)
    return (
      <h2 className="text-center text-2xl font-semibold text-[#1a1a1a]">
        Данных не найдено
      </h2>
    );

  const searchQuery = searchParams.get("query") || "";
  const category = (searchParams.get("category") ||
    "all") as CategoryFilterType["id"];
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
        <h2 className="text-center text-2xl font-semibold text-[#1a1a1a]">
          Объявлений не найдено
        </h2>
      )}
    </>
  );
};

export default AdvertisementsWrapper;
