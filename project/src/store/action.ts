import {createAction} from '@reduxjs/toolkit';
import {FilmType} from '../types/film-type';
import {AppStatus, AuthorizationStatus} from '../utils/consts';

export const changeGenre = createAction<string>('genre/changeGenre');
export const getFilmsByGenre = createAction('films/getByGenre');
export const setFilms = createAction<FilmType[]>('films/setFilms');
export const setPromoFilm = createAction<FilmType>('films/setPromoFilm');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('app/error');

export const setAppStatus = createAction<AppStatus>('app/status');
