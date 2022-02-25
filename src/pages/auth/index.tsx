import React from 'react';
import './styles.scss';

import { AuthContainer } from 'containers/auth';

const AuthPage = () => (
  <div className="auth-page">
    <AuthContainer />
  </div>
);

export default AuthPage as React.FC;
