import {FilmType} from './film-type';

export type StateType = {
  selectedGenre: string;
  filmsByGenre: FilmType[];
  films: FilmType[];
};
