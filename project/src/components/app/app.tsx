import {BrowserRouter, Routes, Route} from 'react-router-dom';

import MainPageProps from '../../types/main-page-props';
import MainPage from '../../pages/MainPage/main-page';
import LoginPage from '../../pages/LoginPage/login-page';
import MyListPage from '../../pages/MyListPage/my-list-page';
import MoviePage from '../../pages/MoviePage/movie-page';
import ReviewPage from '../../pages/ReviewPage/review-page';
import PlayerPage from '../../pages/PlayerPage/player-page';
import NotFoundPage from '../../pages/NotFoundPage/not-found-page';
import PrivateRoute from '../PrivateRoute/private-route';


function App({name, genre, released}: MainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainPage name={name} genre={genre} released={released}/>}/>
        <Route path={'/login'} element={<LoginPage/>}/>
        <Route path={'/myList'} element={
          <PrivateRoute>
            <MyListPage/>
          </PrivateRoute>
        }
        />
        <Route path={'/films/:id'} element={<MoviePage/>}/>
        <Route path={'/films/:id/review'} element={<ReviewPage/>}/>
        <Route path={'/player/:id'} element={<PlayerPage/>}/>
        <Route path={'*'} element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
