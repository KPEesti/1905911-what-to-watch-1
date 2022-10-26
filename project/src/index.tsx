import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {films} from './mocks/films';
import {filmPromo} from './mocks/film-promo';
import {reviews} from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      filmPromo={filmPromo}
      films={films}
      reviews={reviews}
    />
  </React.StrictMode>
);
