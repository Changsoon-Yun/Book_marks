import {MutationCache, QueryCache, QueryClient, QueryClientConfig,} from "react-query";
import {Snackbar} from "@mui/material";

function queryErrorHandler(error: unknown): JSX.Element {
  // error is type unknown because in js, anything can be an error (e.g. throw(5))
  const message =
    error instanceof Error ? error.message : "error connecting to server";

  return <Snackbar autoHideDuration={6000} message={message}/>;
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
      staleTime: 600000, // 10min
      cacheTime: 900000, // 15min,
    },
  },
};

// to satisfy typescript until this file has uncommented contents
export const queryClient = new QueryClient(config);
