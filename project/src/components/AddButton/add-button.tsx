import React, {useEffect, useState} from 'react';
import {AuthorizationStatus} from '../../utils/const';
import {useAppSelector} from '../../hooks/store-hooks';
import {getAuthStatus} from '../../store/Slices/User-Data/selectors';
import {getCountFavorite} from '../../store/Slices/Favorite-Data/selectors';
import {FilmType} from '../../types/film-type';
import {dispatch} from '../../types/state';
import {postFavoriteAction} from '../../store/api-actions';

type AddButtonProps = {
  film: FilmType | null;
}

export default function AddButton({film}: AddButtonProps) {
  const authStatus = useAppSelector(getAuthStatus);
  const countFavorite = useAppSelector(getCountFavorite);

  const [isFavorite, setIsFavorite] = useState(film?.isFavorite);
  const [count, setCount] = useState(countFavorite);

  useEffect(
    () => {
      setIsFavorite(film?.isFavorite);
    }, [film]
  );

  const handleAddButtonClick = () => {
    setIsFavorite((prevState) => !prevState);
    if (isFavorite) {
      setCount((prevState) => prevState - 1);
    } else {
      setCount((prevState) => prevState + 1);
    }
    dispatch(postFavoriteAction({filmID: film?.id, status: Number(!isFavorite)}));
  };
  return authStatus === AuthorizationStatus.Auth
    ?
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={handleAddButtonClick}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={isFavorite ? '#in-list' : '#add'}></use>
      </svg>
      <span>My list</span>
      {
        count !== 0
          ?
          <span className="film-card__count">{count}</span>
          :
          null
      }
    </button>
    :
    null;
}
