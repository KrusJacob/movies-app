import { IDataTrailer, IMovieByKeywordData, IMovieData } from "@/types/movie";
import { IMovieById } from "@/types/movieSingle";
import { axiosApi } from "./api/axiosApi";

const URL = "https://kinopoiskapiunofficial.tech/api/v2.2/films/";
const URL_1 = "https://kinopoiskapiunofficial.tech/api/v2.1/films/";
const type = "TOP_POPULAR_MOVIES";

export const fetchMovies = (page = "1"): Promise<IMovieData> => {
  return axiosApi(`${URL}collections`, { type, page });
};

export const fetchMoviesById = (id: string): Promise<IMovieById> => {
  return axiosApi(`${URL}${id}`);
};

export const fetchTrailerById = (id: string): Promise<IDataTrailer> => {
  return axiosApi(`${URL}${id}/videos`);
};

export const fetchMoviesByKeyword = (keyword: string, page = "1"): Promise<IMovieByKeywordData> => {
  return axiosApi(`${URL_1}search-by-keyword`, { keyword, page });
};
