import {State} from '../../../types/state';
import {FilmType} from '../../../types/film-type';
import {NameSpace} from '../../../utils/const';
import {ReviewType} from '../../../types/review-type';

export const getFilmByID = (state: State) : FilmType | null => state[NameSpace.Film].filmByID;
export const getSimilarFilms = (state: State) : FilmType[] => state[NameSpace.Film].similarFilms;
export const getReviews = (state: State) : ReviewType[] => state[NameSpace.Film].reviews;
