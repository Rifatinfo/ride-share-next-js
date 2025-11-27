/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "./axios";

export const swrConfig = {
  fetcher: (url: string) => api.get(url).then((res) => res.data),
  dedupingInterval: 2000,
  revalidationOnFocus: true,
  refreshInterval:5000,
  errorRetryCount:3,
  errorRetryInterval:3000,


  onError: (err: any) => {
    console.log(err);
    return err;
  },
};