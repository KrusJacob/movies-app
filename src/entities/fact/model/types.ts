export interface IMovieFactData {
  total: number;
  items: IMovieFact[];
}

export interface IMovieFact {
  text: string;
  type: string;
  spoiler: boolean;
}
