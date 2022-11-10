import {createReducer} from '@reduxjs/toolkit';
import {FilmType} from '../types/film-type';
import {StateType} from '../types/state-type';
import {
  changeGenre,
  getFilmsByGenre,
  requireAuthorization,
  setAppStatus,
  setError,
  setFilms,
  setPromoFilm
} from './action';
import {AppStatus, AuthorizationStatus} from '../utils/consts';

const initialState: StateType = {
  selectedGenre: 'All genres',
  filmsByGenre: new Array<FilmType>(),
  films: new Array<FilmType>(),
  promoFilm: {
    id: 1,
    name: 'string',
    posterImage: 'string',
    previewImage: 'string',
    backgroundImage: 'string',
    backgroundColor: 'string',
    videoLink: 'string',
    previewVideoLink: 'string',
    description: 'string',
    rating: 1,
    scoresCount: 1,
    director: 'string',
    starring: [],
    runTime: 1,
    genre: 'string',
    released: 1,
    isFavorite: false,
  },
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  appStatus: AppStatus.Ok,
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
    .addCase(setPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setAppStatus, (state, action) => {
      state.appStatus = action.payload;
    });
});
