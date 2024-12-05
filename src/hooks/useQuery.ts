import { fetchMovies, fetchMoviesByKeyword } from "@/services/fetchMovies";
import { fetchMediaNews } from "@/services/fetchNews";
import { IMovie, IMovieByKeyword, IUnifiedMovie } from "@/types/movie";

import { useQuery } from "@tanstack/react-query";

export const getAllMovies = (page: string | undefined, str = "") => {
  if (str) {
    const { data, isError, isPending } = getAllMoviesByKeyword(str, page);
    return { data, isPending, isError };
  }
  const { data, isPending, isError } = getMovies(page);
  return { data, isPending, isError };
};

export const getMovies = (page: string | undefined) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["movies", page],
    queryFn: () => fetchMovies(page),
    select: (data) => ({
      movies: data.items.map(transformMovie),
      totalPages: data.totalPages,
    }),
  });

  return { data, isPending, isError };
};

export const getAllMoviesByKeyword = (str: string, page: string | undefined) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["moviesByKeyword", str, page],
    queryFn: () => fetchMoviesByKeyword(str, page),
    select: (data) => ({
      movies: data.films.map(transformMovie),
      totalPages: data.pagesCount,
    }),
  });

  return { data, isPending, isError };
};

export const getAllMediaNews = (page: string) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["news", page],
    queryFn: () => fetchMediaNews(page),
    select: (data) => ({
      news: data.items,
      totalPages: data.totalPages,
    }),
  });

  return { data, isPending, isError };
};

const transformMovie = (movie: IMovie | IMovieByKeyword): IUnifiedMovie => {
  return {
    id: "kinopoiskId" in movie ? movie.kinopoiskId : movie.filmId,
    nameRu: movie.nameRu,
    nameEn: movie.nameEn,
    nameOriginal: "nameOriginal" in movie ? movie.nameOriginal : undefined,
    countries: movie.countries,
    genres: movie.genres,
    ratingKinopoisk: "ratingKinopoisk" in movie ? movie.ratingKinopoisk : undefined,
    ratingImbd: "ratingImbd" in movie ? movie.ratingImbd : undefined,
    year: movie.year,
    type: movie.type,
    posterUrl: movie.posterUrl,
    posterUrlPreview: movie.posterUrlPreview,
    description: "description" in movie ? movie.description : undefined,
    filmLength: "filmLength" in movie ? movie.filmLength : undefined,
    rating: "rating" in movie ? movie.rating : undefined,
    ratingVoteCount: "ratingVoteCount" in movie ? movie.ratingVoteCount : undefined,
  };
};
