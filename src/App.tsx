import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATHS } from './routes';

import { HomePage } from './pages/home';
import { SignInPage, SignUpPage } from './pages/auth';
import { GlobalAppContainers } from './containers';
import { PageNotFond } from './pages/404page';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.HOME_PATHS} element={<GlobalAppContainers />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path={PATHS.AUTH_PATHS.SIGNIN} element={<SignInPage />} />
        <Route path={PATHS.AUTH_PATHS.SIGNUP} element={<SignUpPage />} />
        <Route path={PATHS.NOT_FOUND_PATHS} element={<PageNotFond />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
