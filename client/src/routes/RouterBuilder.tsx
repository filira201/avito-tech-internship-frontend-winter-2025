import Layout from "../components/Layout";
import Advertisement from "./Advertisement";
import Advertisements from "./Advertisements";
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
      path: "/item/:itemId",
      element: <Advertisement />,
    },
  ];

  const routes = [
    {
      element: <Layout />,
      children: generalRoutes,
      errorElement: <div>Not Found</div>,
    },
  ];

  return routes;
};

export default RouterBuilder;
