import React from "react";
import { Metadata } from "next";
import FavoritesPage from "@/_pages/FavoritesPage";

export const metadata: Metadata = {
  title: "Фильмы | ФильмФан",
};
const Favorites = () => {
  return (
    <div>
      <FavoritesPage />
    </div>
  );
};

export default Favorites;
