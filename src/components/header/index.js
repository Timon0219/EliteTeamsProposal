import { useContext } from "react";
import logo from "../../assets/img/saas-logo.png";
import { HeaderContext } from "../../context/context";

const Header = () => {
  const context = useContext(HeaderContext);
  return (
    <header
      id="header"
      ref={context}
      className="flex justify-between items-center h-16 sm:h-20 xl:h-28 px-2 md:px-6 py-2"
    >
      <div className="h-full">
        <a href="/">
          <img src={logo} alt="logo" className="h-full" />
        </a>
      </div>
      <div>
        <a href="https://calendly.com/eliteteams/book-your-call">
          <button className="p-2 border border-black rounded-lg text-[10px] sm:text-[12px] md:text-[20px] xl:text-[26px] uppercase font-semibold cursor-pointer hover:text-white hover:bg-black duration-200">
            book now
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
