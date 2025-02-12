import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FC } from "react";

interface HeaderNavToggleButtonProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const HeaderNavToggleButton: FC<HeaderNavToggleButtonProps> = ({
  isMenuOpen,
  toggleMenu,
}) => {
  return (
    <button
      className="active:bg-[#d6e1f5] transition-colors hover:cursor-pointer lg:hidden"
      onClick={toggleMenu}
    >
      {isMenuOpen ? (
        <XMarkIcon className="size-7" />
      ) : (
        <Bars3Icon className="size-8" />
      )}
    </button>
  );
};

export default HeaderNavToggleButton;
