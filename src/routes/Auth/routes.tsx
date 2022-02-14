import { IRoute } from 'core/types';
import { AUTH_PATHS } from './path';

import { SignInContainer } from 'containers/auth/signin/signIn';
import { SignUpContainer } from 'containers/auth/signup/signup';

export const AuthPublicRoutes: IRoute[] = [
  {
    path: AUTH_PATHS.SIGNIN,
    element: <SignInContainer />,
  },
  {
    path: AUTH_PATHS.SIGNUP,
    element: <SignUpContainer />,
  },
];
