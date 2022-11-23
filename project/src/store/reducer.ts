import {createReducer} from '@reduxjs/toolkit';
import {FilmType} from '../types/film-type';
import {StateType} from '../types/state-type';
import {
  changeGenre,
  getFilmsByGenre,
  requireAuthorization,
  setAppStatus,
  setError, setFilmByID,
  setFilms,
  setPromoFilm, setReviews, setSameFilms
} from './action';
import {AppStatus, AuthorizationStatus} from '../utils/const';
import {ReviewType} from '../types/review-type';

const initialState: StateType = {
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  appStatus: AppStatus.Ok,

  selectedGenre: 'All genres',
  filmsByGenre: new Array<FilmType>(),
  films: new Array<FilmType>(),

  promoFilm: null,

  filmByID: null,
  sameFilms: new Array<FilmType>(),
  reviews: new Array<ReviewType>()
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
    .addCase(setFilmByID, (state, action) => {
      state.filmByID = action.payload;
    })
    .addCase(setSameFilms, (state, action) => {
      state.sameFilms = action.payload;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
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
