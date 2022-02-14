import { IRoute } from '../../core/types';
import { SignInPage, SignUpPage } from '../../pages/auth';
import { AUTH_PATHS } from './path';

export const LoginPagePublicRoutes: IRoute[] = [
  {
    path: AUTH_PATHS.SIGNIN,
    element: <SignInPage />,
  },
  {
    path: AUTH_PATHS.SIGNUP,
    element: <SignUpPage />,
  },
];
