import {FormEvent, useState} from 'react';
import {dispatch} from '../../types/state';
import {postReviewAction} from '../../store/api-actions';
import {useParams} from 'react-router-dom';

export default function ReviewForm() {
  const filmID = Number(useParams().id);

  const [review, setReview] = useState({
    rating: 0,
    comment: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      filmID: filmID,
      review: review
    };

    dispatch(postReviewAction(data));
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={(event) => handleSubmit(event)}>
        <div className="rating">
          <div className="rating__stars">
            <input className="rating__input" id="star-10" type="radio" name="rating" value="10"
              onClick={() => setReview((prevState) => ({...prevState, rating: 10}))}
            />
            <label className="rating__label" htmlFor="star-10">Rating 10</label>

            <input className="rating__input" id="star-9" type="radio" name="rating" value="9"
              onClick={() => setReview((prevState) => ({...prevState, rating: 9}))}
            />
            <label className="rating__label" htmlFor="star-9">Rating 9</label>

            <input className="rating__input" id="star-8" type="radio" name="rating" value="8"
              onClick={() => setReview((prevState) => ({...prevState, rating: 8}))}
            />
            <label className="rating__label" htmlFor="star-8">Rating 8</label>

            <input className="rating__input" id="star-7" type="radio" name="rating" value="7"
              onClick={() => setReview((prevState) => ({...prevState, rating: 7}))}
            />
            <label className="rating__label" htmlFor="star-7">Rating 7</label>

            <input className="rating__input" id="star-6" type="radio" name="rating" value="6"
              onClick={() => setReview((prevState) => ({...prevState, rating: 6}))}
            />
            <label className="rating__label" htmlFor="star-6">Rating 6</label>

            <input className="rating__input" id="star-5" type="radio" name="rating" value="5"
              onClick={() => setReview((prevState) => ({...prevState, rating: 5}))}
            />
            <label className="rating__label" htmlFor="star-5">Rating 5</label>

            <input className="rating__input" id="star-4" type="radio" name="rating" value="4"
              onClick={() => setReview((prevState) => ({...prevState, rating: 4}))}
            />
            <label className="rating__label" htmlFor="star-4">Rating 4</label>

            <input className="rating__input" id="star-3" type="radio" name="rating" value="3"
              onClick={() => setReview((prevState) => ({...prevState, rating: 3}))}
            />
            <label className="rating__label" htmlFor="star-3">Rating 3</label>

            <input className="rating__input" id="star-2" type="radio" name="rating" value="2"
              onClick={() => setReview((prevState) => ({...prevState, rating: 2}))}
            />
            <label className="rating__label" htmlFor="star-2">Rating 2</label>

            <input className="rating__input" id="star-1" type="radio" name="rating" value="1"
              onClick={() => setReview((prevState) => ({...prevState, rating: 1}))}
            />
            <label className="rating__label" htmlFor="star-1">Rating 1</label>
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text"
            placeholder="Review text"
            onChange={(e) => setReview((prevState) => ({...prevState, comment: e.target.value}))}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}
