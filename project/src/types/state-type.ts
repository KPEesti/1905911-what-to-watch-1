import {FilmType} from './film-type';
import {AppStatus, AuthorizationStatus} from '../utils/const';
import {ReviewType} from './review-type';

export type StateType = {
  error: string | null;
  authorizationStatus: AuthorizationStatus;
  appStatus: AppStatus;

  selectedGenre: string;
  filmsByGenre: FilmType[];
  films: FilmType[];

  promoFilm: FilmType | null;

  filmByID: FilmType | null;
  sameFilms: FilmType[];
  reviews: ReviewType[];
};
