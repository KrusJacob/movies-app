import { IUnifiedMovie } from "@/types/movie";
import React from "react";
import MovieItem from "../item/MovieItem";

const MoviesList = ({ movies }: { movies: IUnifiedMovie[] }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 min-h-[1100px]">
      {movies.map((movie: IUnifiedMovie) => {
        return <MovieItem key={movie.id} movie={movie} />;
      })}

      {!movies.length && <div className="mt-6">Фильмы не найдены</div>}
    </div>
  );
};

export default MoviesList;
