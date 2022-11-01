import {createAction} from '@reduxjs/toolkit';
import {FilmType} from '../types/film-type';

export const changeGenre = createAction<string>('genre/changeGenre');
export const getFilmsByGenre = createAction('films/getByGenre')
export const setFilms = createAction<FilmType[]>('films/setFilms');
