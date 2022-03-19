import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PATHS } from 'routes/paths';
import { Loader } from 'components';

const RootAppPage = React.lazy(() => import('pages/root'));
const AuthPage = React.lazy(() => import('pages/auth'));
const PageNotFound = React.lazy(() => import('pages/404page'));
const InterfacePage = React.lazy(() => import('pages/interface'));

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<Loader />}>
        <Routes>
          <Route path={PATHS.HOME_PATHS} element={<RootAppPage />}>
            <Route index element={<InterfacePage />} />
            <Route path={PATHS.AUTH} element={<AuthPage />} />
            <Route path={PATHS.NOT_FOUND_PATHS} element={<PageNotFound />} />
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;
