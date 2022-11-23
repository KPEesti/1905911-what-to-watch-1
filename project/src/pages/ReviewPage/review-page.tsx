import {Link, useParams} from 'react-router-dom';
import ReviewForm from '../../components/ReviewForm/review-form';
import {AppRoutes} from '../../utils/const';
import {dispatch} from '../../types/state';
import {fetchFilmByIDAction, logoutAction} from '../../store/aip-actions';
import {useAppSelector} from '../../hooks/store-hooks';
import {useEffect, useState} from 'react';
import {setFilmByID} from '../../store/action';
import Spinner from '../../components/Spinner/spinner';

export default function ReviewPage() {
  const id = Number(useParams().id);
  const film = useAppSelector((state) => state.filmByID);
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      let mounted = true;

      if(mounted) {
        dispatch(fetchFilmByIDAction(id)).then(() => setLoading(false));
      }

      return () => {
        mounted = false;
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
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img
                  src="img/avatar.jpg"
                  alt="User avatar"
                  width="63"
                  height="63"
                />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link" onClick={() => dispatch(logoutAction())}>Sign out</a>
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
