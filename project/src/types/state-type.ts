import {FilmType} from './film-type';
import {AppStatus, AuthorizationStatus} from '../utils/const';
import {ReviewType} from './review-type';
import {UserType} from './user-type';

export type AppProcess = {
  appStatus: AppStatus;
  error: string | null;
};

export type FilmData = {
  filmByID: FilmType | null;
  similarFilms: FilmType[];
  reviews: ReviewType[];
};

export type FilmsData = {
  selectedGenre: string;
  films: FilmType[];
  promoFilm: FilmType | null;
};

export type UserData = {
  authorizationStatus: AuthorizationStatus;
  userData: UserType | null;
};

export type FavoriteData = {
  favoriteFilms: FilmType[];
}
