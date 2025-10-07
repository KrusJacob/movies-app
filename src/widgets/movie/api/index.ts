import { fetchMovieStaff, fetchMovies, fetchMoviesByKeyword } from "@/entities/movie/api";
import { convertMovieFromDto } from "@/entities/movie";
import { useQuery } from "@tanstack/react-query";

export const getAllMovies = (page: string | undefined, search = "") => {
  if (search) {
    const { data, isError, isPending } = getAllMoviesByKeyword(search, page);
    return { data, isPending, isError };
  }
  const { data, isPending, isError } = getMovies(page);
  return { data, isPending, isError };
};

const getMovies = (page: string | undefined) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["movies", page],
    queryFn: () => fetchMovies(page),
    select: (data) => ({
      movies: data.items.map(convertMovieFromDto),
      totalPages: data.totalPages,
    }),
  });

  return { data, isPending, isError };
};

const getAllMoviesByKeyword = (str: string, page: string | undefined) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["moviesByKeyword", str, page],
    queryFn: () => fetchMoviesByKeyword(str, page),
    select: (data) => ({
      movies: data.films.map(convertMovieFromDto),
      totalPages: data.pagesCount,
    }),
  });

  return { data, isPending, isError };
};

export const getMovieStaff = (filmId: string) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["staff", filmId],
    queryFn: () => fetchMovieStaff(filmId),
  });

  return { data, isPending, isError };
};
