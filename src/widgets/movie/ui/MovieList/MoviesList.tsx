import { IMovieDto, MovieItem } from "@/entities/movie";

import React from "react";

export const MoviesList = ({ movies }: { movies: IMovieDto[] }) => {
  return (
    <div className="flex my-6 flex-wrap justify-center gap-4">
      {movies.map((movie: IMovieDto) => {
        return <MovieItem key={movie.kinopoiskId} movie={movie} />;
      })}

      {!movies.length && <div className="mt-6">Фильмы не найдены</div>}
    </div>
  );
};
