import logo from "../assets/more/2.png";

const Header = () => {
  return (
    <header className="header-bg flex justify-center items-center text-white py-5 rancho gap-4">
      <img src={logo} alt="" className="w-[65px]" />
      <h1 className="text-5xl font-normal">Espresso Emporium</h1>
    </header>
  );
};

export default Header;
