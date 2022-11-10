import {Link, useNavigate, useParams} from 'react-router-dom';
import FilmsList from '../../components/FilmsList/films-list';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import Tabs from '../../components/Tabs/tabs';
import {useSelector} from 'react-redux';
import {StateType} from '../../types/state-type';

export default function MoviePage() {
  const navigate = useNavigate();
  const params = useParams();

  const films = useSelector((state: StateType) => state.films);

  const reviews = [
    {
      'id': 1,
      'user': {
        'id': 1,
        'name': 'Oliver.conner'
      },
      'rating': 8,
      'comment': 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed movies in years.',
      'date': '2022-11-02T12:46:13.712Z'
    },
    {
      'id': 2,
      'user': {
        'id': 1,
        'name': 'Oliver.conner'
      },
      'rating': 8,
      'comment': 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed movies in years.',
      'date': '2022-11-02T12:49:35.039Z'
    },
    {
      'id': 3,
      'user': {
        'id': 1,
        'name': 'Oliver.conner'
      },
      'rating': 8,
      'comment': 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed movies in years.',
      'date': '2022-11-02T12:49:38.560Z'
    },
    {
      'id': 4,
      'user': {
        'id': 1,
        'name': 'Oliver.conner'
      },
      'rating': 8,
      'comment': 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed movies in years.',
      'date': '2022-11-02T12:49:39.309Z'
    },
    {
      'id': 5,
      'user': {
        'id': 1,
        'name': 'Oliver.conner'
      },
      'rating': 8,
      'comment': 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed movies in years.',
      'date': '2022-11-02T12:50:06.980Z'
    }
  ];

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={films[0].backgroundImage}
              alt={films[0].name}
            />
          </div>

          <Header/>

          <div className="film-card__wrap">
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
                  onClick={() => navigate(`/player/${params.id}`)}
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
                <Link to={`/films/${params.id}/review`} className="btn film-card__button">
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={films[0].posterImage}
                alt={films[0].name}
                width="218"
                height="327"
              />
            </div>

            <Tabs film={films[0]} reviews={reviews}/>

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={films} count={4} showMoreButton={false}/>
        </section>

        <Footer/>
      </div>
    </>
  );
}
