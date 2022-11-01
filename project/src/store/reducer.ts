import {createReducer} from '@reduxjs/toolkit';
import {FilmType} from '../types/film-type';
import {StateType} from '../types/state-type';

import {changeGenre, getFilmsByGenre, setFilms} from './action';

const initialState: StateType = {
  selectedGenre: 'All genres',
  filmsByGenre: new Array<FilmType>(),
  films: new Array<FilmType>()
};

export const filmsReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeGenre, (state, action) => {
    state.selectedGenre = action.payload;
  })

  builder.addCase(getFilmsByGenre, (state, action) => {
    state.filmsByGenre = state.selectedGenre === 'All genres' ? state.films : state.films.filter((film) => film.genre === state.selectedGenre);
  })

  builder.addCase(setFilms, (state, action) => {
    state.films = action.payload;
    state.filmsByGenre = action.payload;
  })
});
