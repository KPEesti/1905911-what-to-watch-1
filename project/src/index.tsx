import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {films} from './mocks/films';
import {filmPromo} from './mocks/film-promo';
import {reviews} from './mocks/reviews';
import {Provider} from 'react-redux';
import {store} from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        filmPromo={filmPromo}
        films={films}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>
);
