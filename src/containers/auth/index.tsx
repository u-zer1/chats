import React, { useEffect } from 'react';
import './styles.scss';

import { SignInContainer } from './signin/signIn';
import { SignUpContainer } from './signup/signup';
import { Loader } from 'components/Loader';

enum AUTH_TYPE {
  SIGNIN = 'SIGNIN',
  SIGNUP = 'SIGNUP',
}

export const AuthContainer: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [loader, setLoader] = React.useState<boolean>(false);

  const [activeType, setActiveType] = React.useState<string>(AUTH_TYPE.SIGNIN);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setLoader(false);
    }, 350);

    return () => clearTimeout(timeoutID);
  }, [loader]);

  const handleChangeType = (type: string) => {
    setLoader(true);
    setActiveType(type);
  };

  const render = (type: string) => {
    switch (type) {
      case AUTH_TYPE.SIGNIN:
        return <SignInContainer handleChangeAuth={() => handleChangeType(AUTH_TYPE.SIGNUP)} />;
      case AUTH_TYPE.SIGNUP:
        return <SignUpContainer handleChangeAuth={() => handleChangeType(AUTH_TYPE.SIGNIN)} />;
      default:
        return null;
    }
  };

  return (
    <div className="auth">
      <div className="auth-cart">
        <div className="auth-cart__container">
          <h1 className="auth-cart__title">SPACE CHAT</h1>
          <p className="auth-cart__paragraph">
            <strong>Welcome aboard my friend</strong> just a couple of clicks and we start
          </p>
          {loader ? <Loader /> : render(activeType)}
        </div>
      </div>
    </div>
  );
};
