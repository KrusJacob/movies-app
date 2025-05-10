"use client";
import { IMovieDetailed, MovieDetailsInfo, MovieMediaPlayer } from "@/entities/movie";
import React, { useState } from "react";
import { getMovieStaff } from "../../";
import { getAllMovieFacts } from "@/features/movieFact/api";
import { MovieFactList } from "@/features/movieFact";

export const MovieDetails = ({ movie }: { movie: IMovieDetailed }) => {
  const [isShowFacts, setIsShowFacts] = useState(false);
  const { data: movieStaff, isPending: isStaff } = getMovieStaff(`${movie.kinopoiskId}`);
  const { data: movieFacts, isPending: isFacts } = getAllMovieFacts(`${movie.kinopoiskId}`, isShowFacts);

  return (
    <div className="flex flex-col  lg:flex-row gap-6 mx-auto  mt-8">
      <MovieDetailsInfo movie={movie} movieStaff={movieStaff} isPendingSfaff={isStaff} />
      <div className="flex flex-col gap-4">
        <MovieMediaPlayer id={`${movie.kinopoiskId}`} />
        <div>
          <h5 className="text-lg md:text-xl text-center">Описание фильма:</h5>
          <p className="text-sm md:text-lg mt-4"> {movie.description}</p>
        </div>
        <div className="mt-12 flex flex-col justify-center">
          <button
            className="text-[var(--blueColor)] text-lg md:text-xl w-max m-auto"
            onClick={() => setIsShowFacts(!isShowFacts)}
          >
            {isShowFacts ? "Скрыть" : "Показать"} интересные факты о фильме
          </button>
          {isShowFacts && <MovieFactList facts={movieFacts} isPending={isFacts} />}
        </div>
      </div>
    </div>
  );
};
