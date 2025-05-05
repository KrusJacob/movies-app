import React from "react";
import { Metadata } from "next";

import MoviesPage from "@/_pages/MoviesPage";
import { MovieSearch } from "@/features/movieSearch";

export const metadata: Metadata = {
  title: "Фильмы | ФильмФан",
};

const Movies = () => {
  return (
    <div className="max-w-[1500px] m-auto py-4 px-2 flex flex-col gap-6 justify-center">
      <MovieSearch />
      <MoviesPage />
    </div>
  );
};

export default Movies;
