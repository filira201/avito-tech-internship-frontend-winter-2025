import { useState } from "react";
import OtivaLogo from "./OtivaLogo";
import HeaderNavToggleButton from "./HeaderNavToggleButton";
import HeaderNav from "./HeaderNav";
import { Link } from "react-router";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className="sticky top-0 z-50 bg-white py-[15px] px-4 w-full flex items-center justify-between 
    text-[#050505] after:content-[''] after:absolute after:bottom-0 after:inset-x-4 after:h-[1px] after:bg-[#0000001a]"
    >
      <Link
        to="/"
        className="transition-colors hover:cursor-pointer hover:text-[#434349] active:text-[#434349]"
      >
        <OtivaLogo />
      </Link>
      <HeaderNavToggleButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <HeaderNav isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default Header;
