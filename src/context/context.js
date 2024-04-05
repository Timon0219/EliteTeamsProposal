import React, { createContext, useRef } from "react";

const HeaderContext = createContext();

const HeaderProvider = ({ children }) => {
  const headerRef = useRef(null);

  return (
    <HeaderContext.Provider value={headerRef}>
      {children}
    </HeaderContext.Provider>
  );
};

export { HeaderProvider, HeaderContext };
