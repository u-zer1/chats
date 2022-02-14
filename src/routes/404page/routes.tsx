import { IRoute } from 'core/types';
import { NOT_FOUND_PATHS } from './path';

export const pageNotFoundRoutes: IRoute[] = [
  {
    path: NOT_FOUND_PATHS,
    element: <span>Page not found</span>,
  },
];
