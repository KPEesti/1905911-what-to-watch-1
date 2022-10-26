import {FilmType} from '../../types/film-type';
import FilmCard from '../FilmCard/film-card';

type FilmsListProps = {
  films: FilmType[];
  length?: number
}

export default function FilmsList({films, length = -1}: FilmsListProps) {

  return (
    <>
      {films.slice(0, length === -1 ? films.length : length).map((film) => <FilmCard key={film.id} film={film}/>)}
    </>
  );
}
