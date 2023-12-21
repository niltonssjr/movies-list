import axios from "axios";

const baseURL = `${process.env.VUE_APP_IMOB_API}`;

export const httpService = axios.create({
  baseURL,
});

httpService.interceptors.request.use((config) => {
  config.params = {
    apiKey: process.env.VUE_APP_IMOB_TOKEN,
    ...config.params,
  };
  return config;
});

export const generateQueryParam = (filter: Record<string, never>): string => {
  const urlSearchParam = new URLSearchParams();
  Object.entries(filter).forEach(([key, value]) => {
    urlSearchParam.set(key, value);
  });
  return urlSearchParam.toString();
};
