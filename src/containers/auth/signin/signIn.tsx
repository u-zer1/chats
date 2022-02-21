import React from 'react';
import '../styles.scss';

import Input from 'components/form/input';
import SpaceLine from 'components/spaceLine';
import PrimaryButton from 'components/buttons/primaryButton';

import EmailIcon from 'assets/icons/email__icon.svg';
import LockIcon from 'assets/icons/lock__icon.svg';
import VisibleIcon from 'assets/icons/visible_icon.svg';
import GoogleIcon from 'assets/icons/google__icon.svg';
import GitlabIcon from 'assets/icons/gitlab__icon.svg';

interface ISignInContainer {
  handleChangeAuth: () => void;
}

export const SignInContainer: React.FC<ISignInContainer> = ({ handleChangeAuth }) => {
  const [login, setLogin] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChangeToSignIn = () => {
    handleChangeAuth();
  };

  return (
    <form className="auth-cart__form" onSubmit={onSubmit} autoComplete="off">
      <div className="form__item-col">
        <Input
          beforeIcon={EmailIcon}
          name="login"
          type="text"
          value={login}
          placeholder="login"
          onChange={(e) => setLogin(e.target.value)}
        />
        <Input
          name="password"
          type="password"
          beforeIcon={LockIcon}
          afterIcon={VisibleIcon}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form__item-col">
        <PrimaryButton label="Sign in" type="submit" color="green" />
      </div>
      <SpaceLine text="or" width={372} />
      <div className="form__item-row">
        <PrimaryButton icon={GoogleIcon} label="Google" type="button" color="primary" />
        <PrimaryButton icon={GitlabIcon} label="GitLab" type="button" color="primary" />
      </div>
      <span className="form__item-text">Have no account yet?</span>
      <div className="form__item-col">
        <PrimaryButton onClick={handleChangeToSignIn} label="Sign up" type="button" color="primary" />
      </div>
    </form>
  );
};
