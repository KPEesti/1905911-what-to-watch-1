import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {FilmType} from '../types/film-type';
import {APIRoutes, AppStatus, AuthorizationStatus} from '../utils/const';
import {requireAuthorization, setAppStatus, setFilms, setPromoFilm} from './action';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {dropToken, setToken} from '../services/token';


export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/getFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setAppStatus(AppStatus.Loading));
    const {data} = await api.get<FilmType[]>(APIRoutes.Films);
    dispatch(setFilms(data));
    dispatch(setAppStatus(AppStatus.Ok));
  }
);

export const fetchPromoFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/getPromoFilm',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setAppStatus(AppStatus.Loading));
    const {data} = await api.get<FilmType>(APIRoutes.PromoFilm);
    dispatch(setPromoFilm(data));
    dispatch(setAppStatus(AppStatus.Ok));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      dispatch(setAppStatus(AppStatus.Loading));
      await api.get(APIRoutes.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setAppStatus(AppStatus.Ok));
    } catch (e) {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
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
