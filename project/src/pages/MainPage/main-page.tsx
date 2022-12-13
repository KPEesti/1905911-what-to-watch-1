import {useNavigate} from 'react-router-dom';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import Catalog from '../../components/Catalog/catalog';
import {AppRoutes} from '../../utils/const';
import {useAppSelector} from '../../hooks/store-hooks';
import {getPromoFilm} from '../../store/Slices/Films-Data/selectors';
import React, {useEffect, useState} from 'react';
import AddButton from '../../components/AddButton/add-button';
import {dispatch} from '../../types/state';
import {fetchFavoriteAction, fetchPromoFilmAction} from '../../store/api-actions';
import Spinner from '../../components/Spinner/spinner';

export default function MainPage(): JSX.Element {
  const navigate = useNavigate();
  const promoFilm = useAppSelector(getPromoFilm);
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      dispatch(fetchFavoriteAction());
      dispatch(fetchPromoFilmAction()).then(() => setLoading(false));
    }, []
  );

  if (loading) {
    return (
      <Spinner/>
    );
  }

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src={promoFilm?.backgroundImage}
            alt={promoFilm?.name}
          />
        </div>

        <Header/>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={promoFilm?.posterImage}
                alt={promoFilm?.name}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm?.genre}</span>
                <span className="film-card__year">{promoFilm?.released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                  onClick={() => navigate(AppRoutes.PlayerRoot + promoFilm?.id)}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <AddButton film={promoFilm}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <Catalog/>

        <Footer/>
      </div>
    </>
  );
}
