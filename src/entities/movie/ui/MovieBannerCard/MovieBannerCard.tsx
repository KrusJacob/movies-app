import Link from "next/link";
import React, { useState } from "react";
import { MovieImage } from "../";
import { IMovieDto } from "../..";

export const MovieBannerCard = ({ movie }: { movie: IMovieDto }) => {
  const [onHover, setOnHover] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      className="border bg-white relative flex items-center justify-center w-[180px]"
    >
      <Link href={`/movies/${movie.kinopoiskId}`}>
        <MovieImage movie={movie} isBanner onHover={onHover} />
      </Link>
    </div>
  );
};

export default MovieBannerCard;
