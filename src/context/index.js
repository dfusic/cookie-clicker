import { createContext, useState } from "react";

const CookiesContext = createContext();

const CookiesProvider = ({ children }) => {
  const [cookieCount, setCookieCount] = useState(0);

  return (
    <CookiesContext.Provider value={{ cookieCount, setCookieCount }}>
      {children}
    </CookiesContext.Provider>
  );
};

export { CookiesContext, CookiesProvider };
