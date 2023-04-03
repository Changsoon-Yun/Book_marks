import Cookies from "universal-cookie";
import jwtDecode from "jwt-decode";

const cookies = new Cookies();

export const setCookie = (name: string = "creative-wallet", token: string) => {
  console.log(token);
  return cookies.set(name, token, { path: "/" });
};

export const getCookie = (name: string = "creative-wallet") => {
  return { Authorization: `Bearer ${cookies.get(name)}` };
};

export const deleteCookie = (name: string = "creative-wallet") => {
  return cookies.remove(name);
};
