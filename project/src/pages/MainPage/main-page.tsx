import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

import FilmsList from '../../components/FilmsList/films-list';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import GenreTabs from '../../components/GenreTabs/genre-tabs';

import {StateType} from '../../types/state-type';

export default function MainPage(): JSX.Element {
  const navigate = useNavigate();
  const films = useSelector((state: StateType) => state.filmsByGenre);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src={films[0].backgroundImage}
            alt={films[0].name}
          />
        </div>

        <Header/>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={films[0].posterImage}
                alt={films[0].name}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{films[0].name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{films[0].genre}</span>
                <span className="film-card__year">{films[0].released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                  onClick={() => navigate(`/player/${films[0].id}`)}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                  onClick={() => navigate('/myList')}
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreTabs/>

          <FilmsList films={films}/>

        </section>

        <Footer/>
      </div>
    </>
  );
}
