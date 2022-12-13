import FilmsList from '../../components/FilmsList/films-list';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import {useAppSelector} from '../../hooks/store-hooks';
import {getFavoriteFilms} from '../../store/Slices/Favorite-Data/selectors';
import {useEffect, useState} from 'react';
import {dispatch} from '../../types/state';
import {fetchFavoriteAction} from '../../store/api-actions';
import Spinner from '../../components/Spinner/spinner';

export default function MyListPage() {
  const films = useAppSelector(getFavoriteFilms);
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      setLoading(true);
      dispatch(fetchFavoriteAction()).then(() => setLoading(false));
    }, []
  );

  if (loading) {
    return <Spinner/>;
  }

  return (
    <div className="user-page">
      <Header/>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList films={films} showMoreButton/>
      </section>

      <Footer/>
    </div>
  );
}
