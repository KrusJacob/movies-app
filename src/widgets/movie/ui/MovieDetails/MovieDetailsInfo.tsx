"use client";

import React, { useState } from "react";
import { RiMovieAiFill } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
import Modal from "@/shared/ui/Modal/Modal";
import { IMovieDetailed, MovieMediaPlayer } from "@/entities/movie";

interface Props {
  movie: IMovieDetailed;
}

export const MovieDetailsInfo = ({ movie }: Props) => {
  const [isShowTrailer, setIsShowTrailer] = useState(false);
  return (
    <>
      <div className="w-full md:w-[350px]   flex-shrink-0 ">
        <img className="w-full" src={movie.posterUrlPreview} alt={movie.nameOriginal} />
        <div className="flex flex-col gap-1 mt-2">
          <button
            className="w-full flex gap-4 text-xl border-white border-[1px] px-2 py-2 justify-center items-center bg-[var(--darkViolet)] text-white hover:text-[var(--darkViolet)] hover:bg-white transition-all duration-300"
            onClick={() => window.open(`https://www.kinopoisk.ru/film/${movie.kinopoiskId}`)}
          >
            <FaPlay /> Смотреть
          </button>
          <button
            onClick={() => setIsShowTrailer(true)}
            className="w-full flex gap-4 text-xl border-white border-[1px] px-2 py-2 justify-center items-center bg-[var(--darkViolet)] text-white hover:text-[var(--darkViolet)] hover:bg-white transition-all duration-300"
          >
            <RiMovieAiFill /> Трейлер
          </button>
        </div>
        <div className="flex flex-col gap-2 mt-4 ">
          <p>
            <span className="text-gray-400">Рейтинг: </span>
            {movie.ratingKinopoisk || "?"}
          </p>
          <p>
            <span className="text-gray-400">Страна: </span>
            {movie.countries?.map((country) => country.country).join(", ") || "?"}
          </p>
          <p>
            <span className="text-gray-400">Год: </span>
            {movie.year}
          </p>
        </div>
      </div>
      {isShowTrailer && (
        <Modal onClose={() => setIsShowTrailer(!isShowTrailer)}>
          <MovieMediaPlayer id={`${movie.kinopoiskId}`} />
        </Modal>
      )}
    </>
  );
};
