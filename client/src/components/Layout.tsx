import { Outlet } from "react-router";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <footer>Footer</footer> */}
    </>
  );
};

export default Layout;
