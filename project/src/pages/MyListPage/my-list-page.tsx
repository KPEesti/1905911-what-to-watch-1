import FilmsList from '../../components/FilmsList/films-list';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import {FilmType} from '../../types/film-type';

type MyListProps = {
  films: FilmType[]
}

export default function MyListPage({films}: MyListProps) {
  return (
    <div className="user-page">
      <Header/>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmsList films={films}/>
        </div>
      </section>

      <Footer/>
    </div>
  );
}
