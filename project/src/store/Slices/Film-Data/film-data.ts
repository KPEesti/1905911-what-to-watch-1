import {FilmType} from '../../../types/film-type';
import {ReviewType} from '../../../types/review-type';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../../utils/const';
import {FilmData} from '../../../types/state-type';

const initialState: FilmData = {
  filmByID: null,
  similarFilms: new Array<FilmType>(),
  reviews: new Array<ReviewType>(),
};

export const filmData = createSlice({
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

export const {setFilmByID, setSimilarFilms, setReviews} = filmData.actions;
