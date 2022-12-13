import {Link, useNavigate, useParams} from 'react-router-dom';
import FilmsList from '../../components/FilmsList/films-list';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import Tabs from '../../components/Tabs/tabs';
import {AppRoutes, AuthorizationStatus} from '../../utils/const';
import {useEffect, useState} from 'react';
import {dispatch} from '../../types/state';
import {useAppSelector} from '../../hooks/store-hooks';
import {fetchFavoriteAction, getFullFilmInfoAction} from '../../store/api-actions';
import Spinner from '../../components/Spinner/spinner';
import {getAuthStatus} from '../../store/Slices/User-Data/selectors';
import {getFilmByID, getSimilarFilms} from '../../store/Slices/Film-Data/selectors';
import AddButton from '../../components/AddButton/add-button';
import NotFoundPage from '../NotFoundPage/not-found-page';

export default function MoviePage() {
  const id = Number(useParams().id);
  const navigate = useNavigate();

  const authStatus = useAppSelector(getAuthStatus);
  const film = useAppSelector(getFilmByID);
  const similarFilms = useAppSelector(getSimilarFilms);

  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      dispatch(fetchFavoriteAction());
      dispatch(getFullFilmInfoAction(id)).then(() => setLoading(false));
    }, [id]
  );

  if (loading) {
    return <Spinner/>;
  }

  if (!film) {
    return <NotFoundPage/>;
  }

  return (
    <>
      <section className="film-card film-card--full" style={{background: `${film?.backgroundColor}`}}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={film?.backgroundImage}
              alt={film?.name}
            />
          </div>

          <Header/>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film?.genre}</span>
                <span className="film-card__year">{film?.released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                  onClick={() => navigate(AppRoutes.PlayerRoot + id)}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <AddButton film={film}/>
                {
                  authStatus === AuthorizationStatus.Auth &&
                  <Link to={AppRoutes.FilmsRoot + id + AppRoutes.FilmsReview} className="btn film-card__button">
                    Add review
                  </Link>
                }
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={film?.posterImage}
                alt={film?.name}
                width="218"
                height="327"
              />
            </div>

            <Tabs film={film}/>

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={similarFilms} count={4} showMoreButton={false}/>
        </section>

        <Footer/>
      </div>
    </>
  );
}
