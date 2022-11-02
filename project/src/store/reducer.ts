import {createReducer} from '@reduxjs/toolkit';
import {FilmType} from '../types/film-type';
import {StateType} from '../types/state-type';
import {changeGenre, getFilmsByGenre, requireAuthorization, setFilms} from './action';
import {AuthorizationStatus} from '../utils/consts';

const initialState: StateType = {
  selectedGenre: 'All genres',
  filmsByGenre: new Array<FilmType>(),
  films: new Array<FilmType>(),
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.selectedGenre = action.payload;
    })
    .addCase(getFilmsByGenre, (state, action) => {
      state.filmsByGenre = state.selectedGenre === 'All genres' ? state.films : state.films.filter((film) => film.genre === state.selectedGenre);
    })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload;
      state.filmsByGenre = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
});
