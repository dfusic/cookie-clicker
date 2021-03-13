import { useContext } from "react";
import { CookiesContext } from "../context";

const useCookies = () => {
  const { cookieCount, setCookieCount } = useContext(CookiesContext);

  console.log({ cookieCount, setCookieCount });

  const addOne = () => {
    setCookieCount(Number(cookieCount) + 1);
  };

  const getCookiesCount = () => {
    return cookieCount;
  };

  return {
    addOne,
    getCookiesCount,
  };
};

export default useCookies;
