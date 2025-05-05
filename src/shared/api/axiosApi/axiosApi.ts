import axios, { AxiosRequestConfig } from "axios";
import { API_KEY } from "../../config/api";

export const axiosApi = (url: string, params?: AxiosRequestConfig["params"]) => {
  const res = axios
    .get(url, {
      headers: {
        "X-API-KEY": API_KEY,
        "Content-Type": "application/json",
      },
      params: params,
    })
    .then((res) => res.data);

  return res;
};
