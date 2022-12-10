import React from 'react';
import {TabNames} from '../../utils/const';

type TabsHeaderProps = {
  activeTab: TabNames,
  onChangeTab: (tab: TabNames) => void
}

export default function TabsHeader({activeTab, onChangeTab}: TabsHeaderProps) {
  function switchTab(tab: TabNames, evt: React.MouseEvent) {
    evt.preventDefault();
    onChangeTab(tab);
  }

  function setActiveClass(newTab: TabNames) {
    if (activeTab === newTab) {
      return 'film-nav__item film-nav__item--active';
    }
    return 'film-nav__item';
  }

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className={setActiveClass(TabNames.Overview)}>
          <span className="film-nav__link" onClick={
            (event) => switchTab(TabNames.Overview, event)
          }
          >
            Overview
          </span>
        </li>
        <li className={setActiveClass(TabNames.Details)}>
          <span className="film-nav__link" onClick={
            (event) => switchTab(TabNames.Details, event)
          }
          >
            Details
          </span>
        </li>
        <li className={setActiveClass(TabNames.Reviews)}>
          <span className="film-nav__link" onClick={
            (event) => switchTab(TabNames.Reviews, event)
          }
          >
            Reviews
          </span>
        </li>
      </ul>
    </nav>
  );
}
