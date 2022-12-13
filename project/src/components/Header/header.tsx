import {Link, useNavigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks/store-hooks';
import {AppRoutes, AuthorizationStatus} from '../../utils/const';
import {dispatch} from '../../types/state';
import {logoutAction} from '../../store/api-actions';
import {getAuthStatus, getUserData} from '../../store/Slices/User-Data/selectors';


export default function Header() {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const userData = useAppSelector(getUserData);

  const navigate = useNavigate();

  return (
    <header className="page-header film-card__head">
      <div className="logo">
        <Link className="logo__link" to={AppRoutes.Root}>
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
              <div className="user-block__avatar" onClick={() => navigate(AppRoutes.MyList)}>
                <img
                  src={userData?.avatarUrl}
                  alt="User avatar"
                  width="63"
                  height="63"
                />
              </div>
            </li>
            <li className="user-block__item">
              <Link className="user-block__link" to={AppRoutes.Login} onClick={() => dispatch(logoutAction())}>Sign
                out
              </Link>
            </li>
          </ul>
          :
          <div className="user-block">
            <Link className="user-block__link" to={AppRoutes.Login}>Sign in</Link>
          </div>
      }

    </header>
  );
}
