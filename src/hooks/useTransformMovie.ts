// import { IMovie, IMovieByKeyword, IUnifiedMovie } from "@/types/movie";

// export const transformMovie = (movie: IMovie | IMovieByKeyword): IUnifiedMovie => {
//   return {
//     id: "kinopoiskId" in movie ? movie.kinopoiskId : movie.filmId,
//     nameRu: movie.nameRu,
//     nameEn: movie.nameEn,
//     nameOriginal: "nameOriginal" in movie ? movie.nameOriginal : undefined,
//     countries: movie.countries,
//     genres: movie.genres,
//     ratingKinopoisk: "ratingKinopoisk" in movie ? movie.ratingKinopoisk : undefined,
//     ratingImbd: "ratingImbd" in movie ? movie.ratingImbd : undefined,
//     year: movie.year,
//     type: movie.type,
//     posterUrl: movie.posterUrl,
//     posterUrlPreview: movie.posterUrlPreview,
//     description: "description" in movie ? movie.description : undefined,
//     filmLength: "filmLength" in movie ? movie.filmLength : undefined,
//     rating: "rating" in movie ? movie.rating : undefined,
//     ratingVoteCount: "ratingVoteCount" in movie ? movie.ratingVoteCount : undefined,
//   };
// };
