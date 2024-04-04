import logo from "../../assets/img/saas-logo.png";
const Header = () => {
  return (
    <header className="flex justify-between items-center h-16 sm:h-20 px-2 md:px-6 py-2">
      <div className="h-full">
        <a href="/">
          <img src={logo} alt="logo" className="h-full" />
        </a>
      </div>
      <div>
        <a href="https://calendly.com/eliteteams/book-your-call">
          <button className="p-2 border border-black rounded-lg text-[10px] sm:text-[12px] md:text-[20px] uppercase font-semibold cursor-pointer hover:text-white hover:bg-black duration-200">
            book now
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
