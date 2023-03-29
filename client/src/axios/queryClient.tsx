import Swal from "sweetalert2";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientConfig,
} from "react-query";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
function queryErrorHandler(error: unknown): void {
  // error is type unknown because in js, anything can be an error (e.g. throw(5))
  const title =
    error instanceof Error ? error.message : "error connecting to server";

  // prevent duplicate toasts
  // toast.closeAll();
  Toast.fire({
    icon: "success",
    title: title,
  });
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
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
};

// to satisfy typescript until this file has uncommented contents
export const queryClient = new QueryClient(config);
