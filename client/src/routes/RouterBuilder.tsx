import ErrorPage from "../components/ErrorPage";
import Layout from "../components/Layout";
import Advertisement from "./Advertisement";
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
      element: <Advertisement />,
    },
  ];

  const routes = [
    {
      element: <Layout />,
      children: generalRoutes,
      errorElement: <ErrorPage />
    },
  ];

  return routes;
};

export default RouterBuilder;
