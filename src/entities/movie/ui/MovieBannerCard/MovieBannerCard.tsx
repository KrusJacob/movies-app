import Link from "next/link";
import React from "react";
import { MovieImage } from "../";
import { IMovieDto } from "../..";

export const MovieBannerCard = ({ movie }: { movie: IMovieDto }) => {
  return (
    <div className="border bg-white relative flex items-center justify-center w-[180px]">
      <Link href={`/movies/${movie.kinopoiskId}`}>
        <MovieImage movie={movie} isBanner />
      </Link>
    </div>
  );
};

export default MovieBannerCard;
