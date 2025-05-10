"use client";

import React from "react";
import Loader from "@/shared/ui/Loader/Loader";
import { IMovieDetailed, IStaff, useShowActors } from "../..";

interface Props {
  movie: IMovieDetailed;
  movieStaff: IStaff[] | undefined;
  isPendingSfaff: boolean;
}

export const MovieDetailsInfo = ({ movie, movieStaff, isPendingSfaff }: Props) => {
  return (
    <div className="flex flex-col m-auto sm:flex-row lg:flex-col gap-2 h-min">
      <div className="m-auto lg:w-[350px]">
        <img className="w-[350px]" src={movie.posterUrlPreview} alt={movie.nameOriginal} />
        <a
          className="bg-[var(--blueColor)] text-black flex justify-center items-center mt-1 py-2 hover:brightness-50"
          href={movie.webUrl}
          target="_blank"
        >
          Смотреть
        </a>
      </div>
      <div className="text-lg flex flex-col gap-y-4 h-min">
        <h2 className="text-xl md:text-2xl text-center">
          {movie.nameRu} ({movie.year})
        </h2>
        <table>
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
                {isPendingSfaff && <Loader />}
                {movieStaff ? useShowActors(movieStaff, 6) : ""}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
