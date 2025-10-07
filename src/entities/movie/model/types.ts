export interface IMovieData {
  total: number;
  totalPages: number;
  items: IMovie[];
}

export interface IMovieByKeywordData {
  keyword: string;
  pagesCount: number;
  films: IMovieByKeyword[];
}

export interface IMovie {
  kinopoiskId: number;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  countries: Country[];
  genres: Genre[];
  ratingKinopoisk: number;
  // ratingImbd: number;
  year: string;
  type: string;
  posterUrl: string;
  posterUrlPreview: string;
}
interface Country {
  country: string;
}
interface Genre {
  genre: string;
}

export interface IMovieDto {
  kinopoiskId: number;
  nameRu: string;
  nameEn: string;
  nameOriginal?: string;
  countries: Country[];
  genres: Genre[];
  ratingKinopoisk?: number;
  // ratingImbd?: number;
  year: string | number;
  type: string;
  posterUrl: string;
  posterUrlPreview: string;
  description?: string;
  // filmLength?: string;
  rating?: string;
  // ratingVoteCount?: number;
}

export interface IMovieByKeyword {
  filmId: number;
  nameRu: string;
  nameEn: string;
  type: string;
  year: string;
  description: string;
  // filmLength: string;
  countries: Country[];
  genres: Genre[];
  rating: string;
  // ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
}

export interface IDataTrailer {
  total: number;
  items: ITrailer[];
}

export interface ITrailer {
  url: string;
  name: string;
  site: string;
}

export interface IStaff {
  staffId: number;
  nameRu: string;
  nameEn: string;
  description: string;
  posterUrl: string;
  professionText: string;
  professionKey: string;
}

export interface IMovieDetailed {
  kinopoiskId: number;
  kinopoiskHDId: string;
  imdbId: string;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl: string;
  logoUrl: string;
  reviewsCount: number;
  ratingGoodReview: number;
  ratingGoodReviewVoteCount: number;
  ratingKinopoisk: number;
  ratingKinopoiskVoteCount: number;
  ratingImdb: number;
  ratingImdbVoteCount: number;
  ratingFilmCritics: number;
  ratingFilmCriticsVoteCount: number;
  ratingAwait: number;
  ratingAwaitCount: number;
  ratingRfCritics: number;
  ratingRfCriticsVoteCount: number;
  webUrl: string;
  year: number;
  // filmLength: number;
  slogan: string;
  description: string;
  shortDescription: string;
  editorAnnotation: string;
  isTicketsAvailable: boolean;
  productionStatus: string;
  type: string;
  ratingMpaa: string;
  ratingAgeLimits: string;
  hasImax: boolean;
  has3D: boolean;
  lastSync: string;
  countries: Country[];
  genres: Genre[];
  startYear: number;
  endYear: number;
  serial: boolean;
  shortFilm: boolean;
  completed: boolean;
}

export type IPoster = { img: string };
