import { advertisementApi } from "./services/AdvertisementService";

const App = () => {
  const {
    data: advertisements,
    isFetching,
    isLoading,
    error,
  } = advertisementApi.useGetAllAdvertisementsQuery();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isFetching) {
    return <h2>Fetching...</h2>;
  }

  if (error) {
    return <h2>Error</h2>;
  }

  if (!advertisements?.length) {
    return null;
  }

  return (
    <div>
      <p>Это App</p>
      <ul>
        {advertisements.map((advertisement) => (
          <li key={advertisement.id} style={{ marginTop: "20px" }}>
            <p>{advertisement.name}</p>
            <p>{advertisement.description}</p>
            <p>{advertisement.location}</p>

            {advertisement.type === "Недвижимость" && (
              <>
                <p>{advertisement.area}</p>
                <p>{advertisement.price}</p>
                <p>{advertisement.propertyType}</p>
                <p>{advertisement.rooms}</p>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
