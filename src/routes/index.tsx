import React from 'react';
import { Route } from 'react-router-dom';

import { PATHS } from './paths';
import { IRoute } from './types';

const RootPage = React.lazy(() => import('pages/root'));
const AuthPage = React.lazy(() => import('pages/auth'));
const InterfacePage = React.lazy(() => import('pages/interface'));
const PageNotFound = React.lazy(() => import('pages/404page'));

const routes: IRoute[] = [
  { path: PATHS.AUTH, element: <AuthPage /> },
  { path: PATHS.NOT_FOUND_PATHS, element: <PageNotFound /> },
  {
    path: PATHS.HOME_PATHS,
    element: <RootPage />,
    isPrivate: true,
    routes: {
      index: true,
      element: <InterfacePage />,
    },
  },
];

const AppRoute: React.FC<IRoute> = ({ index, path, element, ...props }) => {
  return <Route index={index} path={path} element={element} {...props} />;
};

export { AppRoute, routes, PATHS as paths };
