import {FilmType} from '../../types/film-type';
import FilmCard from '../FilmCard/film-card';
import {useState} from 'react';
import ShowMoreButton from '../ShowMoreButton/show-more-button';

type FilmsListProps = {
  films: FilmType[];
  count?: number;
  showMoreButton?: boolean;
}

export default function FilmsList({films, showMoreButton = true, count = 8}: FilmsListProps) {
  const [shownCount, setShownCount] = useState(count);

  const increaseShownCount = () => {
    setShownCount((prevState) => prevState + 8);
  };

  return (
    <>
      <div className="catalog__films-list">
        {films.slice(0, shownCount).map((film) => <FilmCard key={film.id} film={film}/>)}
      </div>
      {(showMoreButton && shownCount < films.length) && <ShowMoreButton onClick={increaseShownCount}/>}
    </>
  );
}
