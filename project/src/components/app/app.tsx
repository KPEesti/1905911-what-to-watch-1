import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {FilmType} from '../../types/film-type';
import {ReviewType} from '../../types/review-type';

import MainPage from '../../pages/MainPage/main-page';
import LoginPage from '../../pages/LoginPage/login-page';
import MyListPage from '../../pages/MyListPage/my-list-page';
import MoviePage from '../../pages/MoviePage/movie-page';
import ReviewPage from '../../pages/ReviewPage/review-page';
import PlayerPage from '../../pages/PlayerPage/player-page';
import NotFoundPage from '../../pages/NotFoundPage/not-found-page';
import PrivateRoute from '../PrivateRoute/private-route';

type AppProps = {
  filmPromo: FilmType,
  films: FilmType[],
  reviews: ReviewType[]
}


function App({filmPromo, films, reviews}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainPage filmPromo={filmPromo} films={films}/>}/>
        <Route path={'/login'} element={<LoginPage/>}/>
        <Route path={'/myList'} element={
          <PrivateRoute>
            <MyListPage films={films}/>
          </PrivateRoute>
        }
        />
        <Route path={'/films/:id'} element={<MoviePage film={filmPromo} reviews={reviews}/>}/>
        <Route path={'/films/:id/review'} element=
          {
            <PrivateRoute>
              <ReviewPage/>
            </PrivateRoute>
          }
        />
        <Route path={'/player/:id'} element={<PlayerPage/>}/>
        <Route path={'*'} element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
