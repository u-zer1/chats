import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PATHS } from 'routes';

import { SignInContainer } from './signin/signIn';
import { SignUpContainer } from './signup/signup';

enum AUTH_TYPE {
  SIGNIN = 'SIGNIN',
  SIGNUP = 'SIGNUP',
}

export const AuthContainer: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [activeType, setActiveType] = React.useState<string>(AUTH_TYPE.SIGNIN);

  React.useEffect(() => {
    const isSignup = pathname.includes(PATHS.AUTH_PATHS.SIGNUP);
    const isSignin = pathname.includes(PATHS.AUTH_PATHS.SIGNIN);

    if (isSignup) {
      setActiveType(AUTH_TYPE.SIGNUP);
    } else if (isSignin) {
      setActiveType(AUTH_TYPE.SIGNIN);
    } else {
      navigate(PATHS.NOT_FOUND_PATHS);
    }
  }, []);

  const render = (type: string) => {
    switch (type) {
      case AUTH_TYPE.SIGNIN:
        return <SignInContainer />;
      case AUTH_TYPE.SIGNUP:
        return <SignUpContainer />;
      default:
        return null;
    }
  };

  return <div className="auth">{render(activeType)}</div>;
};
