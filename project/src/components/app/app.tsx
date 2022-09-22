import MainPage from "../../pages/MainPage";
import MainPageProps from "./../../types/MainPageProps";

function App({ name, genre, released }: MainPageProps): JSX.Element {
  return <MainPage name={name} genre={genre} released={released} />;
}

export default App;
