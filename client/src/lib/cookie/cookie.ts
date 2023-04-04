import Cookies from "universal-cookie";
import jwtDecode from "jwt-decode";

const cookies = new Cookies();

export const setCookie = (name: string = "creative-wallet", value: any) => {
  console.log(value);
  return cookies.set(name, value, { path: "/" });
};

export const getCookie = (name: string = "creative-wallet") => {
  return cookies.get(name);
};

export const deleteCookie = (name: string = "creative-wallet") => {
  return cookies.remove(name);
};
