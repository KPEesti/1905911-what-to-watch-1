import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../utils/const';
import {userProcess} from './Slices/User-Process/user-process';
import {appProcess} from './Slices/App-Process/app-process';
import {filmsProcess} from './Slices/Films-Process/films-process';
import {filmProcess} from './Slices/Film-Process/film-process';


export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.Films]: filmsProcess.reducer,
  [NameSpace.Film]: filmProcess.reducer,
});
