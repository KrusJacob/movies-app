import { INewsData } from "@/types/news";
import { axiosApi } from "./api/axiosApi";

const URL = "https://kinopoiskapiunofficial.tech/api/v1/media_posts";

export const fetchMediaNews = (page = "1"): Promise<INewsData> => {
  return axiosApi(`${URL}`, { page });
};
