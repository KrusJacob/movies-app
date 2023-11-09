"use client";
import { IMovie } from "@/types/movie";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const MovieItem = ({ movie }: { movie: IMovie }) => {
  const [onHover, setOnHover] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      className="border bg-black relative flex items-center overflow-hidden"
    >
      <div className="md:w-[350px] min-h-[520px]">
        <img src={movie.posterUrlPreview} alt={movie.nameOriginal} />
      </div>
      {onHover && (
        <div className="absolute inset-0 bg-black bg-opacity-80 transition-all grid gap-5 p-6 text-center animate-show">
          <h4 className="text-2xl mb-2 ">{movie.nameRu || movie.nameOriginal}</h4>
          <div>
            <ul className="text-xl grid grid-cols-2 gap-x-3">
              {movie.genres.map((genre) => (
                <li key={genre.genre}>{genre.genre}</li>
              ))}
            </ul>
          </div>
          <Link
            href={`/movies/${movie.kinopoiskId}`}
            className="bg-[var(--blueColor)] text-[var(--darkblue)] text-3xl border rounded-3xl h-min py-1.5 hover:bg-[var(--darkblue)] hover:text-[var(--blueColor)] transition-all duration-300"
          >
            Смотреть
          </Link>
          <div>
            <ul className="text-xl">
              {movie.countries.map((country) => (
                <li key={country.country}>{country.country}</li>
              ))}
            </ul>
          </div>
          <p className="text-2xl">{movie.year} год</p>
        </div>
      )}
    </div>
  );
};

export default MovieItem;
