import { useParams, useNavigate } from "react-router";
import { advertisementApi } from "../services/AdvertisementService";
import AdvertisementImage from "../components/AdvertisementImage";
import { TypeAdvertisement } from "../models/types";
import DetailItem from "../components/DetailtItem";
import { formattedNumber, getYearsLabel } from "../lib/utils/utils";

const AdvertisementById = () => {
  const { itemId } = useParams<{ itemId: string }>();
  const navigate = useNavigate();

  const {
    data: advertisement,
    isLoading,
    isFetching,
    error,
  } = advertisementApi.useGetAdvertisementByIdQuery(Number(itemId));

  if (isLoading) return <h2>Loading...</h2>;
  if (isFetching) return <h2>Fetching...</h2>;
  if (error) return <h2>Error</h2>;
  if (!advertisement) return <h2>No Data</h2>;

  const details = renderDetails(advertisement);

  return (
    <article className="w-full mx-auto mt-10">
      <h1 className="text-3xl font-semibold mb-6 text-[#1a1a1a]">
        {advertisement.name}
      </h1>

      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="grow border border-[#0000001a] lg:min-w-[400px] lg:max-w-[600px]">
          <AdvertisementImage
            imageUrl={advertisement.image}
            alt={advertisement.name}
            size="large"
          />
        </div>

        <div className="flex flex-col grow-[2] gap-6 lg:gap-4">
          <div className="flex flex-col gap-4 order-1 lg:order-2 lg:gap-2 md:flex-row lg:flex-col">
            <button
              onClick={() => navigate(-1)}
              className="w-full cursor-pointer bg-[#02d15c] text-white font-medium text-lg flex items-center justify-center rounded-lg pt-[10px] px-5 pb-3 transition-colors hover:bg-[#00c257] active:bg-[#00c257]"
            >
              Назад
            </button>
            <button
              onClick={() => navigate("/form")}
              className="w-full cursor-pointer bg-[#00aaff] text-white font-medium text-lg flex items-center justify-center rounded-lg pt-[10px] px-5 pb-3 transition-colors hover:bg-[#0098f7] active:bg-[#0098f7]"
            >
              Редактировать
            </button>
          </div>
          <div className="order-2 lg:order-1 lg:grow">
            <section>
              <h2 className="text-[#1a1a1a] font-semibold text-2xl mb-4 lg:mb-2">
                Детали
              </h2>
              <ul className="flex flex-col gap-1">{details}</ul>
            </section>
            <section className="mt-6 lg:mt-4">
              <h2 className="text-[#1a1a1a] font-semibold text-2xl mb-4 lg:mb-2">
                Расположение
              </h2>
              <p className="text-lg">{advertisement.location}</p>
            </section>
          </div>
        </div>
      </div>

      <section className="mt-6 lg:mt-8">
        <h2 className="text-[#1a1a1a] font-semibold text-2xl mb-4">Описание</h2>
        <p className="text-lg">{advertisement.description}</p>
      </section>
    </article>
  );
};

export default AdvertisementById;

const renderDetails = (advertisement: TypeAdvertisement) => {
  if (advertisement.type === "Недвижимость") {
    return (
      <>
        <DetailItem
          label="Тип недвижимости"
          value={advertisement.propertyType}
        />
        <DetailItem label="Общая площадь" value={`${advertisement.area} м²`} />
        <DetailItem
          label="Цена"
          value={`${formattedNumber(advertisement.price)} ₽`}
        />
        <DetailItem label="Количество комнат" value={advertisement.rooms} />
      </>
    );
  }
  if (advertisement.type === "Авто") {
    return (
      <>
        <DetailItem label="Марка" value={advertisement.brand} />
        <DetailItem label="Модель" value={advertisement.model} />
        <DetailItem label="Год выпуска" value={advertisement.year} />
        {advertisement.mileage && (
          <DetailItem
            label="Пробег"
            value={`${formattedNumber(advertisement.mileage)} км`}
          />
        )}
      </>
    );
  }
  if (advertisement.type === "Услуги") {
    return (
      <>
        <DetailItem label="Тип услуги" value={advertisement.serviceType} />
        <DetailItem
          label="Опыт"
          value={`${advertisement.experience} ${getYearsLabel(
            advertisement.experience
          )}`}
        />
        <DetailItem
          label="Стоимость"
          value={`${formattedNumber(advertisement.cost)} ₽`}
        />
        {advertisement.workSchedule && (
          <DetailItem label="График" value={advertisement.workSchedule} />
        )}
      </>
    );
  }
};
