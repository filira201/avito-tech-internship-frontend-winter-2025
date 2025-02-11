import OtivaLogo from "./OtivaLogo";

const Header = () => {
  return (
    <header
      className="sticky top-0 z-50 bg-white py-[15px] px-4 w-full flex items-center justify-between 
    text-[#050505] after:content-[''] after:absolute after:bottom-0 after:inset-x-4 after:h-[1px] after:bg-[#0000001a]"
    >
      <OtivaLogo />
    </header>
  );
};

export default Header;
