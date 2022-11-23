import {State} from '../../../types/state';
import {FilmType} from '../../../types/film-type';
import {NameSpace} from '../../../utils/const';
import {createSelector} from '@reduxjs/toolkit';

export const getGenre = (state: State): string => state[NameSpace.Films].selectedGenre;
export const getFilms = (state: State): FilmType[] => state[NameSpace.Films].films;
export const getPromoFilm = (state: State): FilmType | null => state[NameSpace.Films].promoFilm;

export const filterFilms = createSelector(
  [getGenre, getFilms],
  (currentGenre, films) => {
    if (currentGenre === 'All genres') {
      return films;
    }
    return films.filter((film) => film.genre === currentGenre);
  }
);
