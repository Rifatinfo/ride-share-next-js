import api from "./axios";

export const swrConfig = {
   fetcher: (url: string) => api.get(url).then((res) => res.data),
}