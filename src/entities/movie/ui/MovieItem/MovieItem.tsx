"use client";
import React, { useState } from "react";
import { MovieImage } from "./MovieImage";
import { MovieInfo } from "./MovieInfo";
import { IMovieDto } from "../../model/types";

export const MovieItem = ({ movie }: { movie: IMovieDto }) => {
  const [onHover, setOnHover] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      className="border bg-black relative flex items-center overflow-hidden w-[200px] max-h-[500px] md:w-[350px] animate-opacity "
    >
      <MovieImage movie={movie} />
      {onHover && <MovieInfo movie={movie} />}
    </div>
  );
};
