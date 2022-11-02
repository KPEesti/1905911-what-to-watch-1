import {FilmType} from './film-type';
import {AuthorizationStatus} from '../utils/consts';

export type StateType = {
  selectedGenre: string;
  filmsByGenre: FilmType[];
  films: FilmType[];
  authorizationStatus: AuthorizationStatus;
};
