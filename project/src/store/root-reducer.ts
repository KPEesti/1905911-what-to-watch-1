import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../utils/const';
import {userData} from './Slices/User-Data/user-data';
import {appData} from './Slices/App-Data/app-data';
import {filmsData} from './Slices/Films-Data/films-data';
import {filmData} from './Slices/Film-Data/film-data';
import {favoriteData} from './Slices/Favorite-Data/favorite-data';


export const rootReducer = combineReducers({
  [NameSpace.User]: userData.reducer,
  [NameSpace.App]: appData.reducer,
  [NameSpace.Films]: filmsData.reducer,
  [NameSpace.Film]: filmData.reducer,
  [NameSpace.Favorite]: favoriteData.reducer,
});
