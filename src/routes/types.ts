export interface IRoute {
  index?: boolean;
  path?: string;
  isPrivate?: boolean;
  element?: React.ReactNode;
  routes?: IRoute;
}
