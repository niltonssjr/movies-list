import axios from "axios";

const baseURL = `${process.env.VUE_APP_IMOB_API}?apiKey=${process.env.VUE_APP_IMOB_TOKEN}&`;

export const httpService = axios.create({
  baseURL,
});

export const generateQueryParam = (filter: Record<string, never>): string => {
  const urlSearchParam = new URLSearchParams();
  Object.entries(filter).forEach(([key, value]) => {
    urlSearchParam.set(key, value);
  });
  return urlSearchParam.toString();
};
