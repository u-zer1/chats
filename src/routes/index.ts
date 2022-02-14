import { HOME_PATHS, HomePagePrivateRoutes } from './Home';
import { NOT_FOUND_PATHS, pageNotFoundRoutes } from './404page';
import { AUTH_PATHS, AuthPublicRoutes } from './Auth';
import { IRoute } from 'core/types';

const PATHS = {
  HOME_PATHS,
  AUTH_PATHS,
  NOT_FOUND_PATHS,
};

const privateRoutes: IRoute[] = [...HomePagePrivateRoutes, ...pageNotFoundRoutes];
const publicRoutes: IRoute[] = [...AuthPublicRoutes, ...pageNotFoundRoutes];

export { privateRoutes, publicRoutes, PATHS };
