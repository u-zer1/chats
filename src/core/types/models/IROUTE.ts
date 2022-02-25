interface IRouteBase {
  routes?: IRouteBase[];
  index?: boolean;
  path?: string;
  isPrivate?: string;
  element: React.ReactNode;
}

export interface IRoute extends IRouteBase {
  parentNode?: boolean;
  title: string;
}
