import {useNavigate} from 'react-router-dom';
import {FilmType} from '../../types/film-type';

type FilmCardProps = {
  film: FilmType
  setActive: React.Dispatch<React.SetStateAction<number>>
}

export default function FilmCard({film, setActive}: FilmCardProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <article className="small-film-card catalog__films-card" onMouseOver={() => setActive(film.id)} onMouseOut={() => setActive(0)} onClick={() => navigate(`/films/${film.id}`)}>
      <div className="small-film-card__image">
        <img
          src={film.previewImage}
          alt={film.name}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">
          {film.name}
        </a>
      </h3>
    </article>
  );
}
