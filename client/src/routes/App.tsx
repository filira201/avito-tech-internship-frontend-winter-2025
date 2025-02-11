import { createBrowserRouter, RouterProvider } from "react-router";
import { useMemo } from "react";
import RouterBuilder from "./RouterBuilder";

const App = () => {
  const routes = useMemo(() => RouterBuilder(), []);
  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default App;
