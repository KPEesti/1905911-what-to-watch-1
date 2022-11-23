import {FilmProcess} from '../../../types/film-process';
import {FilmType} from '../../../types/film-type';
import {ReviewType} from '../../../types/review-type';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../../utils/const';

const initialState: FilmProcess = {
  filmByID: null,
  similarFilms: new Array<FilmType>(),
  reviews: new Array<ReviewType>(),
};

export const filmProcess = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {
    setFilmByID: (state, action) => {
      state.filmByID = action.payload;
    },
    setSimilarFilms: (state, action) => {
      state.similarFilms = action.payload;
    },
    setReviews: (state, action) => {
      state.reviews = action.payload;
    }
  }
});

export const {setFilmByID, setSimilarFilms, setReviews} = filmProcess.actions;
