import {FilmType} from '../../../types/film-type';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../../utils/const';
import {FilmsData} from '../../../types/state-type';

const initialState : FilmsData = {
  selectedGenre: 'All genres',
  films: new Array<FilmType>(),
  promoFilm: null,
};

export const filmsData = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.selectedGenre = action.payload;
    },
    setFilms: (state, action) => {
      state.films = action.payload;
    },
    setPromoFilm: (state, action) => {
      state.promoFilm = action.payload;
    }
  }
});

export const {changeGenre, setFilms, setPromoFilm} = filmsData.actions;
