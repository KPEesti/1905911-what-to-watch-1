import {Link} from 'react-router-dom';
import {useAppSelector} from '../../hooks/store-hooks';
import {AuthorizationStatus} from '../../utils/consts';


export default function Header() {
  const {authorizationStatus} = useAppSelector((state) => state);

  return (
    <header className="page-header film-card__head">
      <div className="logo">
        <Link className="logo__link" to={'/'}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      {
        authorizationStatus === AuthorizationStatus.Auth
          ?
          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img
                  src="img/avatar.jpg"
                  alt="User avatar"
                  width="63"
                  height="63"
                />
              </div>
            </li>
            <li className="user-block__item">
              <Link className="user-block__link" to={'/login'}>Sign out</Link>
            </li>
          </ul>
          :
          <div className="user-block">
            <Link className="user-block__link" to={'/login'}>Sign in</Link>
          </div>
      }

    </header>
  );
}
