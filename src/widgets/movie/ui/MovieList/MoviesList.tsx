import { IMovieDto, MovieItem } from "@/entities/movie";

import React from "react";

export const MoviesList = ({ movies }: { movies: IMovieDto[] }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 min-h-[1100px]">
      {movies.map((movie: IMovieDto) => {
        return <MovieItem key={movie.id} movie={movie} />;
      })}

      {!movies.length && <div className="mt-6">Фильмы не найдены</div>}
    </div>
  );
};
