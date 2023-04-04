import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientConfig,
} from "react-query";
import { Snackbar } from "@mui/material";
import Cookies from "universal-cookie";
import { useRecoilState } from "recoil";
import { snackbarAtom } from "@/lib/recoil/atom";
import { getCookie } from "@/lib/cookie/cookie";

const cookies = new Cookies();
export const getJWTHeader = () => {
  const accessToken = getCookie("creative-wallet").accessToken;
  return {
    Authorization: `Bearer ${accessToken}`,
  };
};

function queryErrorHandler(error: unknown) {
  // const [snack, setSnack] = useRecoilState(snackbarAtom);
  // error is type unknown because in js, anything can be an error (e.g. throw(5))
  const message =
    error instanceof Error ? error.message : "error connecting to server";

  return message;
  // return setSnack({ open: true, text: message, severity: "error" });
}

const config: QueryClientConfig = {
  queryCache: new QueryCache({
    onError: queryErrorHandler,
  }),
  mutationCache: new MutationCache({
    onError: queryErrorHandler,
  }),
  defaultOptions: {
    queries: {
      // staleTime: 600000, // 10min
      // cacheTime: 900000, // 15min,
    },
  },
};

// to satisfy typescript until this file has uncommented contents
export const queryClient = new QueryClient(config);
