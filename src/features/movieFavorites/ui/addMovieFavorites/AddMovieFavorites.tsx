"use client";
import { IMovieDetailed, IMovieDto, convertMovieFromDto } from "@/entities/movie";
import React, { useEffect, useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import useFavoriteMovie from "../../hooks/useFavoriteMovie";

const AddMovieFavorites = ({ movie }: { movie: IMovieDetailed }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { addFavoriteMovie, removeFavoriteMovie, getfavoriteMovies } = useFavoriteMovie();

  useEffect(() => {
    const favoriteMovies = getfavoriteMovies();
    setIsFavorite(favoriteMovies.some((item: IMovieDto) => item.kinopoiskId === movie.kinopoiskId));
  }, []);

  const toggleFavoritesHandler = () => {
    if (isFavorite) {
      removeFavoriteMovie(movie);
    } else {
      addFavoriteMovie(convertMovieFromDto(movie));
    }
    setIsFavorite(!isFavorite);
  };
  return (
    <button
      title={isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
      onClick={toggleFavoritesHandler}
      className="flex gap-4  border-white border-[1px] px-3 py-2 justify-center items-center bg-[var(--darkViolet)] text-white hover:text-[var(--darkViolet)] hover:bg-white transition-all duration-300"
    >
      {isFavorite ? <MdFavorite size={24} /> : <MdFavoriteBorder size={24} />}
    </button>
  );
};

export default AddMovieFavorites;
