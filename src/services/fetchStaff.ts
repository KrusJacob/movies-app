import { IDataStaff } from "@/types/staff";
import { axiosApi } from "./api/axiosApi";
const URL = "https://kinopoiskapiunofficial.tech/api/v1/staff";

export const fetchMovieStaff = (filmId: string): Promise<IDataStaff> => {
  return axiosApi(`${URL}`, { filmId });
};
