import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {FilmType} from '../types/film-type';
import {APIRoutes, AppRoutes, AppStatus, AuthorizationStatus} from '../utils/const';
import {
  redirectToRoute,
  requireAuthorization,
  setAppStatus,
  setFilmByID,
  setFilms,
  setPromoFilm,
  setReviews,
  setSameFilms
} from './action';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {dropToken, setToken} from '../services/token';
import {ReviewType} from '../types/review-type';


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

export const getFullFilmInfoAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/getFullFilmInfo',
  async (userID, {dispatch, extra: api}) => {
    await dispatch(fetchFilmByIDAction(userID));
    await dispatch(fetchSimilarFilmsAction(userID));
    await dispatch(fetchReviewsAction(userID));
  }
);

export const fetchFilmByIDAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/getFilmByID',
  async (userId, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<FilmType>(`${APIRoutes.Films }/${ userId}`);
      dispatch(setFilmByID(data));
    }
    catch (e) {
      dispatch(redirectToRoute(AppRoutes.NotFoundPage));
    }
  }
);

export const fetchSimilarFilmsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/getSimilarFilms',
  async (userId, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmType[]>(`${APIRoutes.Films }/${ userId }${APIRoutes.Similar}`);
    dispatch(setSameFilms(data));
  }
);

export const fetchReviewsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/getReviews',
  async (filmID, {dispatch, extra: api}) => {
    const {data} = await api.get<ReviewType[]>(APIRoutes.Reviews + filmID);
    dispatch(setReviews(data));
  }
);

export const postReviewAction = createAsyncThunk<void, {filmID: number, review: {rating: number, comment: string }}, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'review/postReview',
  async ({filmID, review}, {dispatch, extra: api}) => {
    dispatch(setAppStatus(AppStatus.Loading));
    await api.post(APIRoutes.Reviews + filmID, review);
    dispatch(redirectToRoute(AppRoutes.FilmsRoot + filmID));
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
