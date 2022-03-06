import React from 'react';
import '../styles.scss';

import { Input, PrimaryButton, SpaceLine } from 'components';

import { ReactComponent as EmailIcon } from 'assets/icons/auth/email__icon.svg';
import { ReactComponent as LockIcon } from 'assets/icons/auth/lock__icon.svg';
import { ReactComponent as VisibleIcon } from 'assets/icons/auth/visible_icon.svg';
import { ReactComponent as GoogleIcon } from 'assets/icons/auth/google__icon.svg';
import { ReactComponent as GitlabIcon } from 'assets/icons/auth/gitlab__icon.svg';

interface ISignInContainer {
  handleChangeAuth: () => void;
}

export const SignInContainer: React.FC<ISignInContainer> = ({ handleChangeAuth }) => {
  const [visible, setVisible] = React.useState<boolean>(false);

  const [login, setLogin] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="auth-cart__form" onSubmit={onSubmit} autoComplete="off">
      <div className="form__item-col">
        <Input
          name="login"
          type="text"
          value={login}
          placeholder="login"
          onChange={(e) => setLogin(e.target.value)}
          IconBefore={EmailIcon}
        />
        <Input
          name="password"
          type={visible ? 'text' : 'password'}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          IconBefore={LockIcon}
          IconAfter={VisibleIcon}
          IconAfterClick={() => setVisible(!visible)}
        />
      </div>
      <div className="form__item-col">
        <PrimaryButton label="Sign in" type="submit" color="green" />
      </div>
      <SpaceLine text="or" width={372} />
      <div className="form__item-row">
        <PrimaryButton Icon={GoogleIcon} label="Google" type="button" color="primary" />
        <PrimaryButton Icon={GitlabIcon} label="GitLab" type="button" color="primary" />
      </div>
      <span className="form__item-text">Have no account yet?</span>
      <div className="form__item-col">
        <PrimaryButton onClick={handleChangeAuth} label="Sign up" type="button" color="primary" />
      </div>
    </form>
  );
};
