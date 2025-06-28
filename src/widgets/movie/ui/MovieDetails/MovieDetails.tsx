"use client";
import { IMovieDetailed, MovieDetailsInfo } from "@/entities/movie";
import React from "react";
import { getMovieStaff } from "../../";
import { getAllMovieFacts } from "@/features/movieFact/api";
import MovieFacts from "@/widgets/fact/ui/MovieFacts/MovieFacts";
import MovieDetailsBody from "./MovieDetailsBody";

export const MovieDetails = ({ movie }: { movie: IMovieDetailed }) => {
  const { data: movieStaff, isPending: isStaff } = getMovieStaff(`${movie.kinopoiskId}`);
  const { data: movieFacts, isPending: isFacts } = getAllMovieFacts(`${movie.kinopoiskId}`);

  return (
    <div className="mt-8">
      <div className="flex flex-col md:flex-row  gap-8  ">
        <MovieDetailsInfo movie={movie} />
        <MovieDetailsBody movie={movie} movieStaff={movieStaff} isPendingSfaff={isStaff} />
      </div>
      <MovieFacts facts={movieFacts} isFacts={isFacts} />
    </div>
  );
};
