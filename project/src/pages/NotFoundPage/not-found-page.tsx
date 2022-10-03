import {Link} from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>Ой, что-то пошло не так, давайте вернёмся на <Link to='/'>главную страницу</Link>!</p>
    </div>
  );
}
