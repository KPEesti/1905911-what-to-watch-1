import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {locateGenre} from '../../utils/film-manager';
import {changeGenre} from '../../store/Slices/Films-Process/films-process';
import {useAppSelector} from '../../hooks/store-hooks';
import {getFilms, getGenre} from '../../store/Slices/Films-Process/selectors';


export default function GenreTabs() {
  const [activeTab, setActiveTab] = useState<string>(useAppSelector(getGenre));

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
  );
}
