import {useEffect, useRef, useState} from 'react';
import {FilmType} from '../../types/film-type';
import {ReviewType} from '../../types/review-type';
import ReviewCard from '../ReviewCard/review-card';

type TabsProps = {
  film: FilmType;
  reviews: ReviewType[];
}

export default function Tabs({film, reviews}: TabsProps) {
  const [activeTab, setActiveTab] = useState(1);
  const overviewRef = useRef<HTMLLIElement | null>(null);
  const detailsRef = useRef<HTMLLIElement | null>(null);
  const reviewRef = useRef<HTMLLIElement | null>(null);

  console.log(activeTab)

  const convertRatingToString = (rating: number) => {
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

  const convertRunTimeToString = (minutes: number) => {
    return `${(minutes / 60) | 0} h ${minutes % 60} m`;
  };

  useEffect(() => {
    if (activeTab === 1) {
      overviewRef.current!.classList.add('film-nav__item--active');
      detailsRef.current!.classList.remove('film-nav__item--active');
      reviewRef.current!.classList.remove('film-nav__item--active');
    }
    if (activeTab === 2) {
      detailsRef.current!.classList.add('film-nav__item--active');
      overviewRef.current!.classList.remove('film-nav__item--active');
      reviewRef.current!.classList.remove('film-nav__item--active');
    }
    if (activeTab === 3) {
      reviewRef.current!.classList.add('film-nav__item--active');
      overviewRef.current!.classList.remove('film-nav__item--active');
      detailsRef.current!.classList.remove('film-nav__item--active');
    }
  }, [activeTab]);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li ref={overviewRef} className="film-nav__item film-nav__item--active">
            <a href="#" className="film-nav__link" onClick={(e) => {
              e.preventDefault();
              setActiveTab(1);
            }}>
              Overview
            </a>
          </li>
          <li ref={detailsRef} className="film-nav__item">
            <a href="#" className="film-nav__link" onClick={(e) => {
              e.preventDefault();
              setActiveTab(2);
            }}>
              Details
            </a>
          </li>
          <li ref={reviewRef} className="film-nav__item">
            <a href="#" className="film-nav__link" onClick={(e) => {
              e.preventDefault();
              setActiveTab(3);
            }}>
              Reviews
            </a>
          </li>
        </ul>
      </nav>


      {/*OVERVIEW*/}
      {activeTab === 1 &&
      <>
        <div className="film-rating">
          <div className="film-rating__score">{film.rating}</div>
          <p className="film-rating__meta">
            <span className="film-rating__level">{convertRatingToString(film.rating)}</span>
            <span className="film-rating__count">{film.scoresCount} ratings</span>
          </p>
        </div>

        <div className="film-card__text">
          <p>
            {film.description}
          </p>

          <p className="film-card__director">
            <strong>Director: {film.director}</strong>
          </p>

          <p className="film-card__starring">
            <strong>
              Starring: {film.starring.join(', ')} and other
            </strong>
          </p>
        </div>
      </>
      }

      {/*DETAILS*/}
      {activeTab === 2 &&
      <div className="film-card__text film-card__row">
        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Director</strong>
            <span className="film-card__details-value">{film.director}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Starring</strong>
            <span className="film-card__details-value"> {film.starring.map((item) => <><>{item},</>
              <br/></>)}</span>
          </p>
        </div>

        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Run Time</strong>
            <span className="film-card__details-value">{convertRunTimeToString(film.runTime)}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Genre</strong>
            <span className="film-card__details-value">{film.genre}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Released</strong>
            <span className="film-card__details-value">{film.released}</span>
          </p>
        </div>
      </div>
      }

      {/*REVIEWS*/}
      {activeTab === 3 &&
      <div className="film-card__reviews film-card__row">
        <div className="film-card__reviews-col">
          {
            reviews.slice(0, ((reviews.length / 2) | 0) + (Number.isInteger(reviews.length / 2) ? 0 : 1)).map((review) =>
              <ReviewCard review={review} key={review.id}/>)
          }
        </div>
        <div className="film-card__reviews-col">
          {
            reviews.slice(((reviews.length / 2) | 0) + (Number.isInteger(reviews.length / 2) ? 0 : 1)).map((review) =>
              <ReviewCard review={review} key={review.id}/>)
          }
        </div>
      </div>
      }
    </div>
  );
}
