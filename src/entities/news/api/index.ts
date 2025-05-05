import { axiosApi } from "@/shared/api/axiosApi/axiosApi";
import { URL_NEWS } from "@/shared/config/api";
import { INewsData } from "@/entities/news";

export const fetchMediaNews = (page = "1"): Promise<INewsData> => {
  return axiosApi(`${URL_NEWS}`, { page });
};

export const api = {
  fetchMediaNews,
} as const;
