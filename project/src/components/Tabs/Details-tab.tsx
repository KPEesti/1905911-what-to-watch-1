import {FilmType} from '../../types/film-type';

type DetailsTabProps = {
  film: FilmType | null;
}

export default function DetailsTab({film}: DetailsTabProps) {

  const convertRunTimeToString = (minutes: number | undefined) => {
    if (minutes !== undefined) {
      return `${(minutes / 60) | 0} h ${minutes % 60} m`;
    }
    return '0 h';
  };

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{film?.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value"> {film?.starring.map((item) => (
            <>
              {item}, <br/>
            </>
          ))}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{convertRunTimeToString(film?.runTime)}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{film?.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{film?.released}</span>
        </p>
      </div>
    </div>
  );
}
