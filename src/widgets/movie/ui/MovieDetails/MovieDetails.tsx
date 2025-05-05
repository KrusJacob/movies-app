"use client";
import { IMovieDetailed, MovieDetailsInfo, MovieMediaPlayer } from "@/entities/movie";
import React from "react";
import { getMovieStaff } from "../../";

export const MovieDetails = ({ movie }: { movie: IMovieDetailed }) => {
  const { data: movieStaff, isPending } = getMovieStaff(`${movie.kinopoiskId}`);

  return (
    <div className=" grid  lg:grid-cols-[350px_1fr] gap-6 mx-auto  mt-8">
      <MovieDetailsInfo movie={movie} movieStaff={movieStaff} isPendingSfaff={isPending} />
      <div className="flex flex-col gap-4">
        <MovieMediaPlayer id={`${movie.kinopoiskId}`} />
        <p className="text-sm md:text-lg"> {movie.description}</p>
      </div>
    </div>
  );
};
