import {createAction} from '@reduxjs/toolkit';
import {FilmType} from '../types/film-type';
import {AppStatus, AuthorizationStatus} from '../utils/const';
import {ReviewType} from '../types/review-type';

export const changeGenre = createAction<string>('genre/changeGenre');
export const getFilmsByGenre = createAction('films/getByGenre');
export const setFilms = createAction<FilmType[]>('films/setFilms');

export const setPromoFilm = createAction<FilmType>('films/setPromoFilm');

export const setFilmByID = createAction<FilmType | null>('films/setFilmByID');
export const setSameFilms = createAction<FilmType[]>('films/setSameFilms');
export const setReviews = createAction<ReviewType[]>('films/setReviews');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('app/error');

export const setAppStatus = createAction<AppStatus>('app/status');

export const redirectToRoute = createAction<string>('app/redirect');

