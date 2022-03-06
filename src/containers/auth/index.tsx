import React from 'react';
import './styles.scss';

import { SignInContainer } from './signin/signIn';
import { SignUpContainer } from './signup/signup';
import { Loader } from 'components/Loader';

import { ReactComponent as AstronautIcon } from 'assets/icons/auth/astroman__icon.svg';

enum AUTH_TYPE {
  SIGNIN = 'SIGNIN',
  SIGNUP = 'SIGNUP',
}

export const AuthContainer: React.FC = () => {
  const [loader, setLoader] = React.useState<boolean>(false);
  const [activeType, setActiveType] = React.useState<string>(AUTH_TYPE.SIGNIN);

  React.useEffect(() => {
    const timeoutID = setTimeout(() => {
      setLoader(false);
    }, 350);

    return () => clearTimeout(timeoutID);
  }, [loader]);

  const handleChangeType = (type: string) => {
    setLoader(true);
    setActiveType(type);
  };

  const renderContent = (type: string) => {
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
        <AstronautIcon className="auth-cart__symbol" />
        <div className="auth-cart__container">
          <h1 className="auth-cart__title">SPACE CHAT</h1>
          <p className="auth-cart__paragraph">
            <strong>Welcome aboard my friend</strong> just a couple of clicks and we start
          </p>
          {loader ? <Loader className="auth-loader" /> : renderContent(activeType)}
        </div>
      </div>
    </div>
  );
};
