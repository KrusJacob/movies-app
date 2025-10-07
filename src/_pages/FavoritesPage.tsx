"use client";
import { IMovieDto } from "@/entities/movie";
import { ClearMovieFavorites, useFavoriteMovie } from "@/features/movieFavorites";
import Button from "@/shared/ui/Button/Button";
import { MoviesList } from "@/widgets/movie";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const FavoritesPage = () => {
  const [favoriteMovies, setFavoriteMovies] = useState<IMovieDto[]>([]);
  const router = useRouter();
  const { getfavoriteMovies, clearAllFavoriteMovies } = useFavoriteMovie();

  useEffect(() => {
    setFavoriteMovies(getfavoriteMovies());
  }, []);

  return (
    <div className={`max-w-[1500px] m-auto py-4 pb-12 px-3`}>
      <Button onClick={() => router.back()}> ← Назад</Button>

      <MoviesList movies={favoriteMovies} />
      {favoriteMovies.length > 0 && (
        <ClearMovieFavorites
          onClear={() => {
            clearAllFavoriteMovies();
            setFavoriteMovies([]);
          }}
        />
      )}
    </div>
  );
};

export default FavoritesPage;
