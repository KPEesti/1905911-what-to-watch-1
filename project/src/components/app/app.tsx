import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {FilmType} from '../../types/film-type';
import {ReviewType} from '../../types/review-type';
import {AppRoutes} from '../../utils/consts';

import MainPage from '../../pages/MainPage/main-page';
import LoginPage from '../../pages/LoginPage/login-page';
import MyListPage from '../../pages/MyListPage/my-list-page';
import MoviePage from '../../pages/MoviePage/movie-page';
import ReviewPage from '../../pages/ReviewPage/review-page';
import PlayerPage from '../../pages/PlayerPage/player-page';
import NotFoundPage from '../../pages/NotFoundPage/not-found-page';
import PrivateRoute from '../PrivateRoute/private-route';

import {useDispatch} from 'react-redux';
import {setFilms} from '../../store/action';

type AppProps = {
  filmPromo: FilmType,
  films: FilmType[],
  reviews: ReviewType[]
}


function App({filmPromo, films, reviews}: AppProps): JSX.Element {
  const dispatch = useDispatch();
  dispatch(setFilms(films));

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Root} element={<MainPage filmPromo={filmPromo}/>}/>
        <Route path={AppRoutes.Login} element={<LoginPage/>}/>
        <Route path={AppRoutes.MyList} element={
          <PrivateRoute>
            <MyListPage films={films}/>
          </PrivateRoute>
        }
        />
        <Route path={`${AppRoutes.FilmsRoot}:id`} element={<MoviePage film={filmPromo} reviews={reviews} filmsLike={films}/>}/>
        <Route path={`${AppRoutes.FilmsRoot}:id${AppRoutes.FilmsReview}`} element=
          {
            <PrivateRoute>
              <ReviewPage/>
            </PrivateRoute>
          }
        />
        <Route path={`${AppRoutes.PlayerRoot}:id`} element={<PlayerPage/>}/>
        <Route path={'*'} element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
