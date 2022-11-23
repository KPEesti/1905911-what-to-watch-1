import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppRoutes, AppStatus, AuthorizationStatus} from '../../utils/const';

import MainPage from '../../pages/MainPage/main-page';
import LoginPage from '../../pages/LoginPage/login-page';
import MyListPage from '../../pages/MyListPage/my-list-page';
import MoviePage from '../../pages/MoviePage/movie-page';
import ReviewPage from '../../pages/ReviewPage/review-page';
import PlayerPage from '../../pages/PlayerPage/player-page';
import NotFoundPage from '../../pages/NotFoundPage/not-found-page';
import PrivateRoute from '../PrivateRoute/private-route';
import Spinner from '../Spinner/spinner';

import {useAppSelector} from '../../hooks/store-hooks';
import {getAuthStatus} from '../../store/Slices/User-Process/selectors';
import {getAppStatus} from '../../store/Slices/App-Process/selectors';


function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const appStatus = useAppSelector(getAppStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown || appStatus === AppStatus.Loading) {
    return (
      <Spinner/>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Root} element={<MainPage/>}/>
        <Route path={AppRoutes.Login} element={<LoginPage/>}/>
        <Route path={AppRoutes.MyList} element={
          <PrivateRoute>
            <MyListPage/>
          </PrivateRoute>
        }
        />
        <Route path={`${AppRoutes.FilmsRoot}:id`}
          element={<MoviePage/>}
        />
        <Route path={`${AppRoutes.FilmsRoot}:id${AppRoutes.FilmsReview}`} element=
          {
            <PrivateRoute>
              <ReviewPage/>
            </PrivateRoute>
          }
        />
        <Route path={`${AppRoutes.PlayerRoot}:id`} element={<PlayerPage/>}/>
        <Route path={'/pageNotFound'} element={<NotFoundPage/>}/>
        <Route path={'*'} element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
