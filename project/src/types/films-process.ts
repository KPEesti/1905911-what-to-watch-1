import {FilmType} from './film-type';

export type FilmsProcess = {
  selectedGenre: string;
  films: FilmType[];
  promoFilm: FilmType | null;
};
