import {FilmType} from '../types/film-type';

export function locateGenre(films: FilmType[]) : Set<string> {
  const result = new Set<string>(['All genres']);

  films.forEach((film) => {
    result.add(film.genre);
  })

  return result;
}
