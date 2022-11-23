import {Link} from 'react-router-dom';
import Footer from '../../components/Footer/footer';
import LoginForm from '../../components/LoginForm/login-form';
import {AppRoutes} from '../../utils/const';

export default function LoginPage() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={AppRoutes.Root} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <LoginForm/>

      <Footer/>
    </div>
  );
}
