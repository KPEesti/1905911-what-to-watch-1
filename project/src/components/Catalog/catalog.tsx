import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {locateGenre} from '../../utils/film-manager';
import {changeGenre} from '../../store/Slices/Films-Data/films-data';
import {useAppSelector} from '../../hooks/store-hooks';
import {filterFilms, getFilms, getGenre} from '../../store/Slices/Films-Data/selectors';
import FilmsList from '../FilmsList/films-list';


export default function Catalog() {
  const [activeTab, setActiveTab] = useState<string>(useAppSelector(getGenre));
  const filmsByGenre = useAppSelector(filterFilms);

  const tabs = locateGenre(useAppSelector(getFilms));
  const tabsArr: string[] = [];

  tabs.forEach((tab) => {
    tabsArr.push(tab);
  });

  const dispatch = useDispatch();

  const handleClick = (evt: React.MouseEvent, tabName: string) => {
    evt.preventDefault();
    dispatch(changeGenre(tabName));
    setActiveTab(tabName);
  };

  const setActiveStyle = (tab: string) => tab === activeTab ? 'catalog__genres-item--active' : '';

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ul className="catalog__genres-list">
        {
          tabsArr.map((tab) => (
            <li key={tab} className={`catalog__genres-item ${setActiveStyle(tab)}`}>
              <a href="#" className="catalog__genres-link" onClick={(e) => handleClick(e, tab)}>
                {tab}
              </a>
            </li>
          ))
        }
      </ul>

      <FilmsList films={filmsByGenre}/>

    </section>
  );
}
