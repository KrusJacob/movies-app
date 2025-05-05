"use client";

import React from "react";
import useShowActors from "../../model/useShowActors";
import Loader from "@/shared/ui/Loader/Loader";
import { IMovieDetailed, IStaff } from "../..";

interface Props {
  movie: IMovieDetailed;
  movieStaff: IStaff[] | undefined;
  isPendingSfaff: boolean;
}

export const MovieDetailsInfo = ({ movie, movieStaff, isPendingSfaff }: Props) => {
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
