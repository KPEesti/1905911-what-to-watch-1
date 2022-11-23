import {FilmType} from './film-type';
import {ReviewType} from './review-type';

export type FilmProcess = {
  filmByID: FilmType | null;
  similarFilms: FilmType[];
  reviews: ReviewType[];
}
