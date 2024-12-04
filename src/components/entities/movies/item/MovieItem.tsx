"use client";
import { IMovie, IUnifiedMovie } from "@/types/movie";
import React, { useState } from "react";
import MoviesItemInfo from "./MoviesItemInfo";
import MovieItemImage from "./MovieItemImage";

const MovieItem = ({ movie }: { movie: IUnifiedMovie }) => {
  const [onHover, setOnHover] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      className="border bg-black relative flex items-center overflow-hidden w-[200px] max-h-[500px] md:w-[350px] animate-opacity "
    >
      <MovieItemImage movie={movie} />
      {onHover && <MoviesItemInfo movie={movie} />}
    </div>
  );
};

export default MovieItem;
