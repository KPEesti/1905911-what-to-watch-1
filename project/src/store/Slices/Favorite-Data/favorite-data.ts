import {FavoriteData} from '../../../types/state-type';
import {FilmType} from '../../../types/film-type';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../../utils/const';

const initialState: FavoriteData = {
  favoriteFilms: new Array<FilmType>(),
};

export const favoriteData = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {
    setFavoriteFilms: (state, action) => {
      state.favoriteFilms = action.payload;
    },
  }
});

export const {setFavoriteFilms} = favoriteData.actions;
