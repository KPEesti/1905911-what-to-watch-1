import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

import FilmsList from '../../components/FilmsList/films-list';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import GenreTabs from '../../components/GenreTabs/genre-tabs';

import {FilmType} from '../../types/film-type';
import {StateType} from '../../types/state-type';

type MainPageProps = {
  filmPromo: FilmType;
};

export default function MainPage({filmPromo}: MainPageProps): JSX.Element {
  const navigate = useNavigate();
  const films = useSelector((state: StateType) => state.filmsByGenre);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src={filmPromo.backgroundImage}
            alt={filmPromo.name}
          />
        </div>

        <Header/>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={filmPromo.posterImage}
                alt={filmPromo.name}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{filmPromo.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmPromo.genre}</span>
                <span className="film-card__year">{filmPromo.released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                  onClick={() => navigate(`/player/${filmPromo.id}`)}
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
