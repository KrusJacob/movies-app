import { fetchMoviesById, fetchTrailerById } from "@/services/fetchMovies";
import { IMovieSingle } from "@/types/movieSingle";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { Props } from "next/script";
import React from "react";
import MovieTrailer from "./MovieTrailer";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const movie: IMovieSingle = await fetchMoviesById(params.id);

  return {
    title: `${movie.nameRu || movie.nameOriginal} | Movie app`,
  };
}

const MovieSingle = async ({ params }: { params: { id: string } }) => {
  const movie: IMovieSingle = await fetchMoviesById(params.id);

  const getTrailer = async () => {
    const trailer = await fetchTrailerById(params.id);
    console.log(trailer);
  };

  return (
    <div className="max-w-[1500px] grid  lg:grid-cols-[350px_1fr] gap-5 m-auto px-3">
      <div className="m-auto grid grid-cols-2 lg:grid-cols-1">
        <div className="max-w-[350px]">
          <img src={movie.posterUrlPreview} alt={movie.nameOriginal} />
        </div>
        <div className="text-lg grid gap-y-2 h-min mt-5">
          <p className="text-2xl">
            {movie.nameRu} ({movie.year})
          </p>
          {movie.ratingKinopoisk && <p>Рейтинг: {movie.ratingKinopoisk} </p>}

          <ul className="flex flex-wrap">
            Жанр:
            {movie.genres.map((genre) => (
              <span className="ml-2" key={genre.genre}>
                {genre.genre},
              </span>
            ))}
          </ul>
          <ul className="flex flex-wrap">
            Страна:
            {movie.countries.map((country) => (
              <span className="ml-2" key={country.country}>
                {country.country},
              </span>
            ))}
          </ul>
          {movie.ratingAgeLimits && <p>Возраст: {movie.ratingAgeLimits.slice(3)}+</p>}
        </div>
      </div>

      <div className=" gap-5">
        <MovieTrailer id={params.id} />
        <div>
          <p className="text-lg mt-5"> {movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieSingle;

const Trailer = ({ url }: { url: string }) => {
  let trailerUrl = url || "https://www.youtube.com/embed/dgDRNgRuIH8?si=2phq-hA8jiHU4At9";
  //   "https://www.youtube.com/watch?v=dgDRNgRuIH8"
  //   "https://www.youtube.com/v/Mc-2wOgPx8Y"
  trailerUrl = "https://www.youtube.com/embed/" + trailerUrl.slice(25);
  console.log(trailerUrl);
  return (
    <iframe
      width="1180"
      height="520"
      src={trailerUrl}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};
