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
