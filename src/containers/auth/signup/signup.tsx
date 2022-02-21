import React, { useState } from 'react';
import '../styles.scss';

import Input from 'components/form/input';
import SpaceLine from 'components/spaceLine';
import PrimaryButton from 'components/buttons/primaryButton';

import EmailIcon from 'assets/icons/email__icon.svg';
import LockIcon from 'assets/icons/lock__icon.svg';
import VisibleIcon from 'assets/icons/visible_icon.svg';
import InfoIcon from 'assets/icons/info__icon.svg';

interface ISignUpContainer {
  handleChangeAuth: () => void;
}

export const SignUpContainer: React.FC<ISignUpContainer> = ({ handleChangeAuth }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rePassword, setRePassword] = useState<string>('');

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
          beforeIcon={InfoIcon}
          name="full-name"
          type="text"
          value={email}
          placeholder="Full name"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          beforeIcon={EmailIcon}
          name="Email"
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          beforeIcon={LockIcon}
          afterIcon={VisibleIcon}
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          beforeIcon={LockIcon}
          afterIcon={VisibleIcon}
          name="repassword"
          type="password"
          placeholder="Repeat password"
          onChange={(e) => setRePassword(e.target.value)}
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
