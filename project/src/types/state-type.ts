import {FilmType} from './film-type';
import {AppStatus, AuthorizationStatus} from '../utils/consts';

export type StateType = {
  selectedGenre: string;
  filmsByGenre: FilmType[];
  films: FilmType[];
  promoFilm: FilmType;
  error: string | null;
  authorizationStatus: AuthorizationStatus;
  appStatus: AppStatus;
};
