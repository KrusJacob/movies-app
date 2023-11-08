export interface IMovieData {
  total: number;
  totalPages: number;
  items: IMovie[];
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

interface Country {
  country: string;
}
interface Genre {
  genre: string;
}
