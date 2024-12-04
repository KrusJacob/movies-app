"use client";
import { fetchMovieStaff } from "@/services/fetchStaff";
import { IMovieById } from "@/types/movieSingle";
import { IDataStaff } from "@/types/staff";
import React, { useEffect, useState } from "react";
import useStaff from "./useStaff";

const MovieInfo = ({ movie }: { movie: IMovieById }) => {
  const [movieStaff, setMovieStaff] = useState<IDataStaff>([]);

  console.log(movie);

  const getStaff = () => {
    const res = fetchMovieStaff(`${movie.kinopoiskId}`);
    res.then((data) => setMovieStaff(data));
  };

  useEffect(() => {
    getStaff();
  }, []);

  return (
    <div className="m-auto w-fit flex flex-col sm:flex-row lg:flex-col gap-2 h-full">
      <div className="max-w-[350px] w-full max-h-[525px] m-auto">
        <img className="w-full " src={movie.posterUrlPreview} alt={movie.nameOriginal} />
      </div>
      <div className="text-lg flex flex-col gap-y-4 h-min">
        <a
          className="bg-[var(--blueColor)] mt-1 text-black flex justify-center items-center py-2 hover:brightness-50"
          href={movie.webUrl}
          target="_blank"
        >
          Смотреть
        </a>
        <h2 className="text-xl md:text-2xl text-center">
          {movie.nameRu} ({movie.year})
        </h2>
        <tbody>
          <tr>
            <td>Рейтинг: </td>
            <td> {movie.ratingKinopoisk || "?"}</td>
          </tr>
          {movie.ratingAgeLimits && (
            <tr>
              <td>Возраст: </td>
              <td>{movie.ratingAgeLimits.slice(3)}+</td>
            </tr>
          )}
          <tr>
            <td>Жанр: </td>
            <td>{movie.genres?.map((item) => item.genre).join(", ")}</td>
          </tr>
          <tr>
            <td>Страна: </td>
            <td>{movie.countries?.map((c) => c.country).join(", ")}</td>
          </tr>
          <tr>
            <td>В ролях: </td>
            <td>
              {useStaff(movieStaff, 6).join(", ")}
              ...
            </td>
          </tr>
        </tbody>
      </div>
    </div>
  );
};

export default MovieInfo;
