import FilmsList from '../../components/FilmsList/films-list';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import {useAppSelector} from '../../hooks/store-hooks';
import {getFilms} from '../../store/Slices/Films-Process/selectors';

export default function MyListPage() {
  const films = useAppSelector(getFilms);

  return (
    <div className="user-page">
      <Header/>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList films={films}/>
      </section>

      <Footer/>
    </div>
  );
}
