import FilmsList from '../../components/FilmsList/films-list';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import {useSelector} from 'react-redux';
import {StateType} from '../../types/state-type';

export default function MyListPage() {
  const films = useSelector((state: StateType) => state.films);

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
