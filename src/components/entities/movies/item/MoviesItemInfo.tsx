import { IUnifiedMovie } from "@/types/movie";
import Link from "next/link";
import React from "react";

const MoviesItemInfo = ({ movie }: { movie: IUnifiedMovie }) => {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-80 transition-all flex flex-col gap-2 justify-between md:gap-4 p-4 text-center animate-show">
      <p className="text-lg md:text-2xl mb-2 ">{movie.nameRu || movie.nameOriginal}</p>

      <ul className="text-sm md:text-xl grid md:grid-cols-2 gap-x-3">
        {movie.genres.map((genre) => (
          <li key={genre.genre}>{genre.genre}</li>
        ))}
      </ul>

      <Link
        href={`/movies/${movie.id}`}
        className="bg-[var(--blueColor)] text-[var(--darkblue)]  text-lg md:text-2xl border rounded-3xl h-min py-1 hover:bg-[var(--darkblue)] hover:text-[var(--blueColor)] transition-all duration-300"
      >
        Смотреть
      </Link>

      <ul className="hidden md:block">
        {movie.countries.map((country) => (
          <li key={country.country}>{country.country}</li>
        ))}
      </ul>

      <p className="text-base md:text-2xl">{movie.year} год</p>
    </div>
  );
};

export default MoviesItemInfo;
