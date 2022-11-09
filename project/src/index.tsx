import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import {checkAuthAction, fetchFilmsAction, fetchPromoFilmAction} from './store/aip-actions';
import {dispatch} from './types/state';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
dispatch(fetchFilmsAction());
dispatch(fetchPromoFilmAction());
// dispatch(checkAuthAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
