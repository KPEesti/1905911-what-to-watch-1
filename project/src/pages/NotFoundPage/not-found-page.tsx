import {Link} from 'react-router-dom';
import {AppRoutes} from '../../utils/const';

export default function NotFoundPage() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>Ой, что-то пошло не так, давайте вернёмся на <Link to={AppRoutes.Root}>главную страницу</Link>!</p>
    </div>
  );
}
