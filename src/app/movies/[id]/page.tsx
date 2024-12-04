import { fetchMoviesById } from "@/services/fetchMovies";
import { IMovieById } from "@/types/movieSingle";
import { Metadata } from "next";
import React from "react";
import MovieByIdPage from "@/components/pages/MovieByIdPage";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const movie: IMovieById = await fetchMoviesById(params.id);

  return {
    title: `${movie.nameRu || movie.nameOriginal} | Movie app`,
  };
}

const MovieSingle = async ({ params }: { params: { id: string } }) => {
  const movie: IMovieById = await fetchMoviesById(params.id);

  return <MovieByIdPage movie={movie} />;
};

export default MovieSingle;
