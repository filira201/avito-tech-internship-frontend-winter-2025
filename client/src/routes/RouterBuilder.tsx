import ErrorPage from "./ErrorPage";
import Layout from "../components/Layout";
import AdvertisementById from "./AdvertisementById";
import Advertisements from "./Advertisements";
import FormAdvertisement from "./FormAdvertisement";
import HomePage from "./HomePage";

const RouterBuilder = () => {
  const generalRoutes = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/list",
      element: <Advertisements />,
    },
    {
      path: "/form",
      element: <FormAdvertisement />,
    },
    {
      path: "/item/:itemId",
      element: <AdvertisementById />,
    },
  ];

  const routes = [
    {
      element: <Layout />,
      children: generalRoutes,
      errorElement: <ErrorPage />,
    },
  ];

  return routes;
};

export default RouterBuilder;
