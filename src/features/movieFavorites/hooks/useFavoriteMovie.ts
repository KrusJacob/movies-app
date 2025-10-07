import { IMovieDto } from "@/entities/movie";

const useFavoriteMovie = () => {
  const getfavoriteMovies = () => JSON.parse(localStorage.getItem("favorites") || "[]");

  const addFavoriteMovie = (movie: IMovieDto) => {
    const favoriteMovies = getfavoriteMovies();
    localStorage.setItem("favorites", JSON.stringify([...favoriteMovies, movie]));
  };

  const removeFavoriteMovie = (movie: IMovieDto) => {
    const favoriteMovies = getfavoriteMovies();

    localStorage.setItem(
      "favorites",
      JSON.stringify(favoriteMovies.filter((item: IMovieDto) => item.kinopoiskId !== movie.kinopoiskId))
    );
  };

  const clearAllFavoriteMovies = () => {
    localStorage.removeItem("favorites");
  };

  return { getfavoriteMovies, addFavoriteMovie, removeFavoriteMovie, clearAllFavoriteMovies };
};

export default useFavoriteMovie;
