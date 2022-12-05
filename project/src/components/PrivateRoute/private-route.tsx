import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks/store-hooks';
import {AuthorizationStatus} from '../../utils/const';
import {getAuthStatus} from '../../store/Slices/User-Data/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
};

export default function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthStatus);

  return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={'/login'}/>;
}
