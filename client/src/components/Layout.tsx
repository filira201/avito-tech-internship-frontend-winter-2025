import { Outlet } from "react-router";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="w-full min-h-full h-auto mb-14 mt-0 mx-auto p-[0px_round(up,_7.22223%,_.2rem)] text-[#050505]">
        <Outlet />
      </main>
      {/* <footer>Footer</footer> */}
    </>
  );
};

export default Layout;
