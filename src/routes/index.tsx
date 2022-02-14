// not used because frozen until the end hoc/withRouter
import { PATHS } from './paths';
import { IRoute } from 'core/types/models';

import { GlobalAppContainers } from 'containers';
import { HomePage } from 'pages/home';
import { AuthPage } from 'pages/auth';
import { SignInContainer } from 'containers/auth/signin/signIn';
import { SignUpContainer } from 'containers/auth/signup/signup';

export const AppRoutes: IRoute[] = [
  {
    parentNode: true,
    title: 'Home page',
    path: PATHS.HOME_PATHS,
    element: <GlobalAppContainers />,
    routes: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    parentNode: true,
    title: 'AUTH',
    path: PATHS.AUTH.MAIN,
    element: <AuthPage />,
    routes: [
      {
        path: PATHS.AUTH.SIGNIN,
        element: <SignInContainer />,
      },
      {
        path: PATHS.AUTH.SIGNUP,
        element: <SignUpContainer />,
      },
    ],
  },
];

export const PageNotFound = {
  title: 'Page not found',
  path: PATHS.NOT_FOUND_PATHS,
  element: <span>Page not found</span>,
};
