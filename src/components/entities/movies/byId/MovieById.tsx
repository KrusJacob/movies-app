import { IMovieById } from "@/types/movieSingle";
import React from "react";
import MovieInfo from "./MovieInfo";
import MovieMediaPlayer from "./MovieMediaPlayer";

const MovieById = ({ movie }: { movie: IMovieById }) => {
  return (
    <div className=" grid  lg:grid-cols-[350px_1fr] gap-6 mx-auto  mt-8">
      <MovieInfo movie={movie} />
      <div className="flex flex-col gap-4">
        <MovieMediaPlayer id={`${movie.kinopoiskId}`} />
        <p className="text-sm md:text-lg"> {movie.description}</p>
      </div>
    </div>
  );
};

export default MovieById;
