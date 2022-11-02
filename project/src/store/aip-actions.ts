import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {FilmType} from '../types/film-type';
import {APIRoutes, AuthorizationStatus} from '../utils/consts';
import {requireAuthorization, setFilms} from './action';
import {AuthData} from '../types/auth-data';
import { UserData } from '../types/user-data';
import {dropToken, setToken} from '../services/token';


export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/getFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmType[]>(APIRoutes.Films);
    dispatch(setFilms(data));
  }
)

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoutes.Login)
      dispatch(requireAuthorization(AuthorizationStatus.Auth))
    }
    catch (e) {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth))
    }
  }
)

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoutes.Login, {email, password});
    setToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoutes.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
