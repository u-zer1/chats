import { IRoute } from 'core/types/models';
import { Route, Routes } from 'react-router-dom';

// not finished mus be improve for auto render routes
export const withRouter = (router: IRoute[]) => {
  const renderChilds = (childRoute: any, idx: any) => {
    return <Route key={idx} {...childRoute} element={childRoute.element} />;
  };

  return router.map((route: IRoute, idx: number) => {
    return (
      <Routes key={idx} {...route}>
        {route.routes?.map((childRoutes, idx: number) => renderChilds(childRoutes, idx))}
      </Routes>
    );
  });
};
