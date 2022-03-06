import React from 'react';
import '../styles.scss';

import { Input, SpaceLine, PrimaryButton } from 'components';

import { ReactComponent as EmailIcon } from 'assets/icons/auth/email__icon.svg';
import { ReactComponent as LockIcon } from 'assets/icons/auth/lock__icon.svg';
import { ReactComponent as VisibleIcon } from 'assets/icons/auth/visible_icon.svg';
import { ReactComponent as InfoIcon } from 'assets/icons/auth/info__icon.svg';

interface ISignUpContainer {
  handleChangeAuth: () => void;
}

export const SignUpContainer: React.FC<ISignUpContainer> = ({ handleChangeAuth }) => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [rePassword, setRePassword] = React.useState<string>('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('login: ', email);
    console.log('password: ', password);
    console.log('rePassword: ', rePassword);
  };

  return (
    <form className="auth-cart__form" onSubmit={onSubmit} autoComplete="off">
      <div className="form__item-col">
        <Input
          name="full-name"
          type="text"
          value={email}
          placeholder="Full name"
          onChange={(e) => setEmail(e.target.value)}
          IconBefore={InfoIcon}
        />
        <Input
          name="Email"
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          IconBefore={EmailIcon}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          IconBefore={LockIcon}
          IconAfter={VisibleIcon}
        />
        <Input
          name="repassword"
          type="password"
          placeholder="Repeat password"
          onChange={(e) => setRePassword(e.target.value)}
          IconBefore={LockIcon}
          IconAfter={VisibleIcon}
        />
      </div>
      <div className="form__item-col">
        <PrimaryButton label="Submit" type="submit" color="green" />
      </div>
      <SpaceLine text="or" width={372} />
      <div className="form__item-col">
        <PrimaryButton onClick={handleChangeAuth} className="sign-up__button" label="Sign in" color="primary" type="button" />
      </div>
    </form>
  );
};
