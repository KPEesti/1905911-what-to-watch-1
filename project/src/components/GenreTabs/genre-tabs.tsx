import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeGenre, getFilmsByGenre} from '../../store/action';
import {StateType} from '../../types/state-type';
import {locateGenre} from '../../utils/film-manager';


export default function GenreTabs() {
  const [activeTab, setActiveTab] = useState<string>(useSelector((state: StateType) => state.selectedGenre));

  const tabs = locateGenre(useSelector((state: StateType) => state.films));
  const tabsArr: string[] = [];

  tabs.forEach((tab) => {
    tabsArr.push(tab);
  });

  const dispatch = useDispatch();

  const handleClick = (evt: React.MouseEvent, tabName: string) => {
    evt.preventDefault();
    dispatch(changeGenre(tabName));
    dispatch(getFilmsByGenre());
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
