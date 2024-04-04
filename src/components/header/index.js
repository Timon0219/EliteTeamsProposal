import logo from "../../assets/img/saas-logo.png";
const Header = () => {
  return (
    <header className="flex justify-between items-center h-20 px-6 py-2">
      <div className="h-full">
        <img src={logo} alt="logo" className="h-full" />
      </div>
      <div>
        <button className="p-2 border border-black rounded-lg uppercase text font-semibold cursor-pointer hover:text-white hover:bg-black duration-200">
          book now
        </button>
      </div>
    </header>
  );
};

export default Header;
