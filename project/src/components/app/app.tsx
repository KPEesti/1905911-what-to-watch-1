import MainPage from '../../pages/MainPage/main-page';
import MainPageProps from '../../types/main-page-props';

function App({ name, genre, released }: MainPageProps): JSX.Element {
  return <MainPage name={name} genre={genre} released={released} />;
}

export default App;
