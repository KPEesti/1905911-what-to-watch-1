import {State} from '../../../types/state';
import {FilmType} from '../../../types/film-type';
import {NameSpace} from '../../../utils/const';
import {createSelector} from '@reduxjs/toolkit';

export const getFavoriteFilms = (state: State): FilmType[] => state[NameSpace.Favorite].favoriteFilms;

// export const getCountFavorite = (state: State) : number => state[NameSpace.Favorite].favoriteFilms.length;

export const getCountFavorite = createSelector(
  [getFavoriteFilms],
  (favoriteFilms) => favoriteFilms.length
);
