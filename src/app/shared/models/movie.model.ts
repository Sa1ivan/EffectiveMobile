export interface IMovies {
  items?: IMovieShort[];
  films?: IMovieShort[];
  keyword?: string;
  pagesCount?: number;
  searchFilmsCountResult?: number;
  total?: number;
  totalPages?: number;
}

export interface IMovieShort {
  kinopoiskId: number;
  nameRu?: string;
  nameOriginal?: string;
  year?: number;
  posterUrl?: string;
  ratingKinopoisk?: number | string;
  genres?: { genre: string }[];
}

export interface IMovieDetails extends IMovieShort {
  description?: string;
  ratingImdb?: number;
  filmLength?: number;
  countries?: { country: string }[];
}
