import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {FilmType} from '../types/film-type';
import {APIRoutes, AppRoutes, AppStatus} from '../utils/const';
import {redirectToRoute} from './action';
import {AuthType} from '../types/auth-type';
import {UserType} from '../types/user-type';
import {dropToken, setToken} from '../services/token';
import {ReviewType} from '../types/review-type';
import {setAppStatus} from './Slices/App-Data/app-data';
import {setFilms, setPromoFilm} from './Slices/Films-Data/films-data';
import {setFilmByID, setSimilarFilms, setReviews} from './Slices/Film-Data/film-data';
import {setUserData} from './Slices/User-Data/user-data';
import {setFavoriteFilms} from './Slices/Favorite-Data/favorite-data';


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
  async (filmID, {dispatch, extra: api}) => {
    await dispatch(fetchFilmByIDAction(filmID));
    await dispatch(fetchSimilarFilmsAction(filmID));
    await dispatch(fetchReviewsAction(filmID));
  }
);

export const fetchFilmByIDAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/getFilmByID',
  async (ID, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<FilmType>(`${APIRoutes.Films}/${ID}`);
      dispatch(setFilmByID(data));
    } catch (e) {
      dispatch(setAppStatus(AppStatus.Loading));
      dispatch(redirectToRoute(AppRoutes.NotFoundPage));
      dispatch(setAppStatus(AppStatus.Ok));
    }
  }
);

export const fetchSimilarFilmsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/getSimilarFilms',
  async (filmID, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmType[]>(`${APIRoutes.Films}/${filmID}${APIRoutes.Similar}`);
    dispatch(setSimilarFilms(data));
  }
);

export const fetchReviewsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/getReviews',
  async (filmID, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<ReviewType[]>(APIRoutes.Reviews + filmID);
      dispatch(setReviews(data));
    } catch (e) {
      dispatch(redirectToRoute(AppRoutes.NotFoundPage));
    }
  }
);

export const postReviewAction = createAsyncThunk<void, { filmID: number, review: { rating: number, comment: string } }, {
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
    const {data} = await api.get<FilmType>(APIRoutes.PromoFilm);
    dispatch(setPromoFilm(data));
  }
);

export const fetchFavoriteAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/getFavoriteFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmType[]>(APIRoutes.Favorite);
    dispatch(setFavoriteFilms(data));
  }
);

export const postFavoriteAction = createAsyncThunk<void, { filmID: number, status: number }, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/postFavorite',
  async (_arg, {dispatch, extra: api}) => {
    await api.post(`${APIRoutes.Favorite}/${_arg.filmID}/${_arg.status}`);
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<UserType>(APIRoutes.Login);
    dispatch(setUserData(data));
  }
);

export const loginAction = createAsyncThunk<void, AuthType, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserType>(APIRoutes.Login, {email, password});
    dispatch(setUserData(data));
    setToken(data.token);
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoutes.Logout);
    dropToken();
  },
);
