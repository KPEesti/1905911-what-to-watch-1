import {FilmType} from '../../types/film-type';

type OverviewTabProps = {
  film: FilmType | null;
}

export default function OverviewTab({film}: OverviewTabProps) {

  const convertRatingToString = (rating: number | undefined) => {
    if (rating === undefined) {
      return 'Bad';
    }

    if (rating >= 0 && rating < 3) {
      return 'Bad';
    } else if (rating >= 3 && rating < 5) {
      return 'Normal';
    } else if (rating >= 5 && rating < 8) {
      return 'Good';
    } else if (rating >= 8 && rating < 10) {
      return 'Very good';
    } else {
      return 'Awesome';
    }
  };

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film?.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{convertRatingToString(film?.rating)}</span>
          <span className="film-rating__count">{film?.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>
          {film?.description}
        </p>

        <p className="film-card__director">
          <strong>Director: {film?.director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>
            Starring: {film?.starring.join(', ')} and other
          </strong>
        </p>
      </div>
    </>
  );
}
