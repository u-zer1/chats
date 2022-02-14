import { IRoute } from 'core/types';
import { HOME_PATHS } from './path';

export const HomePagePrivateRoutes: IRoute[] = [
  {
    index: true,
    path: HOME_PATHS,
    element: <span>HOME PAGE</span>,
  },
];
