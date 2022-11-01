import {configureStore} from '@reduxjs/toolkit';
import {filmsReducer} from './reducer';

export const store = configureStore({
  reducer: filmsReducer
});
