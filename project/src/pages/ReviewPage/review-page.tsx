import {Link, useNavigate, useParams} from 'react-router-dom';
import ReviewForm from '../../components/ReviewForm/review-form';
import {AppRoutes} from '../../utils/const';
import {dispatch} from '../../types/state';
import {fetchFilmByIDAction, logoutAction} from '../../store/api-actions';
import {useAppSelector} from '../../hooks/store-hooks';
import {useEffect, useState} from 'react';
import Spinner from '../../components/Spinner/spinner';
import {setFilmByID} from '../../store/Slices/Film-Data/film-data';
import {getFilmByID} from '../../store/Slices/Film-Data/selectors';
import {getUserData} from '../../store/Slices/User-Data/selectors';

export default function ReviewPage() {
  const navigate = useNavigate();
  const id = Number(useParams().id);

  const film = useAppSelector(getFilmByID);
  const userData = useAppSelector(getUserData);

  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      dispatch(fetchFilmByIDAction(id)).then(() => setLoading(false));

      return () => {
        dispatch(setFilmByID(null));
      };
    }, [id]
  );

  if (loading) {
    return <Spinner/>;
  }

  return (
    <section className="film-card film-card--full" style={{background: `${film?.backgroundColor}`}}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img
            src={film?.backgroundImage}
            alt={film?.name}
          />
        </div>

        <header className="page-header">
          <div className="logo">
            <Link to={AppRoutes.Root} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoutes.FilmsRoot + id} className="breadcrumbs__link">
                  {film?.name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <span className="breadcrumbs__link">Add review</span>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar" onClick={() => navigate(AppRoutes.MyList)}>
                <img
                  src={userData?.avatarUrl}
                  alt="User avatar"
                  width="63"
                  height="63"
                />
              </div>
            </li>
            <li className="user-block__item">
              <span className="user-block__link" onClick={() => dispatch(logoutAction())}>Sign out</span>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img
            src={film?.posterImage}
            alt={film?.name}
            width="218"
            height="327"
          />
        </div>
      </div>

      <ReviewForm/>
    </section>
  );
}
