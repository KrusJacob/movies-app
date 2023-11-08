import { fetchMovies } from "@/services/fetchMovies";
import { IMovieData } from "@/types/movie";
import { useQuery } from "@tanstack/react-query";

export const fetchAllMovies = (page: number) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["movies", page],
    queryFn: () => fetchMovies(page),
    select: (data) => ({
      movies: data.items,
      totalPages: data.totalPages,
    }),
  });

  return { data, isLoading, isError };
};
