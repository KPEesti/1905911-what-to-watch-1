import ReviewCard from '../ReviewCard/review-card';
import {useAppSelector} from '../../hooks/store-hooks';
import {getReviews} from '../../store/Slices/Film-Data/selectors';


export default function ReviewsTab() {
  const reviews = useAppSelector(getReviews);

  return (
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
  );
}
