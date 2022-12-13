import {ReviewType} from '../../types/review-type';

type ReviewCardProps = {
  review: ReviewType;
}

export default function ReviewCard({review}: ReviewCardProps) {

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const convertDateToString = (date: string) => `${monthNames[Number(review.date.slice(5, 7)) - 1]} ${review.date.slice(8, 10)}, ${review.date.slice(0, 4)}`;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date"
            dateTime={review.date.slice(0, 10)}
          >{convertDateToString(review.date)}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}
