import { fetchMoviesById } from "@/entities/movie/api";
import { Metadata } from "next";
import React from "react";
import MovieDetailedPage from "@/_pages/MovieDetailedPage";
import { IMovieDetailed } from "@/entities/movie";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const movie: IMovieDetailed = await fetchMoviesById(params.id);

  return {
    title: `${movie.nameRu || movie.nameOriginal} | Movie app`,
  };
}

const MovieDetailed = async ({ params }: { params: { id: string } }) => {
  const movie: IMovieDetailed = await fetchMoviesById(params.id);

  return <MovieDetailedPage movie={movie} />;
};

export default MovieDetailed;
