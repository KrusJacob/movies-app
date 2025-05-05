export interface INewsData {
  total: number;
  totalPages: number;
  items: IMediaNews[];
}

export interface IMediaNews {
  kinopoiskId: number;
  imageUrl: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
}
