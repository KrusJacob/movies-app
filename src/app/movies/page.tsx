import React from "react";
import { Metadata } from "next";

import MoviesPage from "@/components/pages/MoviesPage";
import Search from "@/components/entities/search/Search";

export const metadata: Metadata = {
  title: "Фильмы | ФильмФан",
};

const Movies = () => {
  return (
    <div className="max-w-[1500px] m-auto py-4 px-2 flex flex-col gap-6 justify-center">
      <Search />
      <MoviesPage />
    </div>
  );
};

export default Movies;
