import { TYPE_MOVIES, URL_MOVIES, URL_MOVIE_SEARCH, URL_STAFF } from "@/shared/config/api";
import { axiosApi } from "@/shared/api/axiosApi/axiosApi";
import { IDataTrailer, IMovieByKeywordData, IMovieData, IMovieDetailed, IStaff } from "..";

export const fetchMovies = (page = "1"): Promise<IMovieData> => {
  return axiosApi(`${URL_MOVIES}/collections`, { type: TYPE_MOVIES, page });
};

export const fetchMoviesById = (id: string): Promise<IMovieDetailed> => {
  return axiosApi(`${URL_MOVIES}/${id}`);
};

export const fetchTrailerById = (id: string): Promise<IDataTrailer> => {
  return axiosApi(`${URL_MOVIES}/${id}/videos`);
};

export const fetchMoviesByKeyword = (keyword: string, page = "1"): Promise<IMovieByKeywordData> => {
  return axiosApi(`${URL_MOVIE_SEARCH}/search-by-keyword`, { keyword, page });
};

export const fetchMovieStaff = (filmId: string): Promise<IStaff[]> => {
  return axiosApi(`${URL_STAFF}`, { filmId });
};

export const api = {
  fetchMovies,
  fetchMoviesById,
  fetchTrailerById,
  fetchMoviesByKeyword,
} as const;
