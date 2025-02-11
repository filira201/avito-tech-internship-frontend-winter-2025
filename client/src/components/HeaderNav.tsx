import { PlusIcon } from "@heroicons/react/24/outline";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { FC } from "react";
import { NavLink } from "react-router";

interface HeaderNavProps {
  isMenuOpen: boolean;
}

const HeaderNav: FC<HeaderNavProps> = ({ isMenuOpen }) => {
  return (
    <nav
      className={clsx(
        "bg-white absolute left-0 right-0 top-full shadow-md p-4 flex-col items-center gap-4 lg:flex lg:flex-row lg:static lg:bg-transparent lg:p-0 lg:w-auto lg:shadow-none",
        {
          flex: isMenuOpen,
          hidden: !isMenuOpen,
        }
      )}
    >
      <NavLink
        to="/list"
        className={({ isActive }) =>
          `flex items-center gap-1 rounded-md py-1 px-3 hover:cursor-pointer hover:text-[#ff4053] active:text-[#ff4053] ${
            isActive && "bg-[#00000008] text-[#1d1b16]"
          }`
        }
      >
        <ClipboardIcon className="size-5" />
        Список объявлений
      </NavLink>

      <NavLink
        to="/form"
        className={({ isActive }) =>
          `flex items-center gap-1 rounded-md py-1 px-3 hover:cursor-pointer hover:text-[#ff4053] active:text-[#ff4053] ${
            isActive && "bg-[#00000008] text-[#1d1b16]"
          }`
        }
      >
        <PlusIcon className="size-6" />
        Разместить объявление
      </NavLink>
    </nav>
  );
};

export default HeaderNav;
