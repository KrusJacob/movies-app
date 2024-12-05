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

export interface IUnifiedMovie {
  id: number;
  nameRu: string;
  nameEn: string;
  nameOriginal?: string;
  countries: Country[];
  genres: Genre[];
  ratingKinopoisk?: number;
  ratingImbd?: number;
  year: string;
  type: string;
  posterUrl: string;
  posterUrlPreview: string;
  description?: string;
  filmLength?: string;
  rating?: string;
  ratingVoteCount?: number;
}

export interface IMovieByKeyword {
  filmId: number;
  nameRu: string;
  nameEn: string;
  type: string;
  year: string;
  description: string;
  filmLength: string;
  countries: Country[];
  genres: Genre[];
  rating: string;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
}

export interface IMovie {
  kinopoiskId: number;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  countries: Country[];
  genres: Genre[];
  ratingKinopoisk: number;
  ratingImbd: number;
  year: string;
  type: string;
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

interface Country {
  country: string;
}
interface Genre {
  genre: string;
}
