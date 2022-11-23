import {FormEvent, useRef, useState} from 'react';
import {dispatch} from '../../types/state';
import {loginAction} from '../../store/aip-actions';
import {useNavigate} from 'react-router-dom';
import {AppRoutes} from '../../utils/const';

enum FormStatus {
  VALID,
  PASSWORD_INVALID,
  EMAIL_INVALID,
}

export default function LoginForm() {

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passRef = useRef<HTMLInputElement | null>(null);
  const [formStatus, setFormStatus] = useState<FormStatus>(FormStatus.VALID);

  const navigate = useNavigate();

  const formStatusText = () => {
    if (formStatus === FormStatus.VALID) {
      return null;
    }

    if (formStatus === FormStatus.PASSWORD_INVALID) {
      return (
        <div className="sign-in__message">
          <p>Please enter a valid password address</p>
        </div>
      );
    }

    if (formStatus === FormStatus.EMAIL_INVALID) {
      return (
        <div className="sign-in__message">
          <p>Please enter a valid email address</p>
        </div>
      );
    }
  };

  const checkEmailValidity = () => {
    if (emailRef.current?.validity.patternMismatch) {
      setFormStatus(FormStatus.EMAIL_INVALID);
      return false;
    }
    return true;
  };

  const checkPasswordValidity = () => {
    if (passRef.current?.validity.patternMismatch) {
      setFormStatus(FormStatus.PASSWORD_INVALID);
      return false;
    }
    return true;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if ((emailRef.current && checkEmailValidity()) && (passRef.current && checkPasswordValidity())) {
      dispatch(loginAction({
        email: emailRef.current?.value,
        password: passRef.current?.value
      }));
      navigate(AppRoutes.Root);
    }
  };

  return (
    <div className="sign-in user-page__content">
      <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
        {formStatusText()}
        <div className="sign-in__fields">
          <div className="sign-in__field">
            <input
              ref={emailRef}
              className="sign-in__input"
              type="email"
              placeholder="Email address"
              name="user-email"
              id="user-email"
              pattern={'^.+@.+\\..+$'}
            />
            <label
              className="sign-in__label visually-hidden"
              htmlFor="user-email"
            >
              Email address
            </label>
          </div>
          <div className="sign-in__field">
            <input
              ref={passRef}
              className="sign-in__input"
              type="password"
              placeholder="Password"
              name="user-password"
              id="user-password"
              pattern={'^[A-Za-z].*[0-9]|[0-9].*[A-Za-z]$'}
            />
            <label
              className="sign-in__label visually-hidden"
              htmlFor="user-password"
            >
              Password
            </label>
          </div>
        </div>
        <div className="sign-in__submit">
          <button className="sign-in__btn" type="submit">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}
