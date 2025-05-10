import { URL_MOVIES } from "@/shared/config/api";
import { IMovieFactData } from "../model/types";
import { axiosApi } from "@/shared/api/axiosApi/axiosApi";

export const fetchMovieFacts = (id: string): Promise<IMovieFactData> => {
  return axiosApi(`${URL_MOVIES}/${id}/facts`);
};
