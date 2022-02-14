import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATHS } from './routes';

import { HomePage } from './pages/home';
import { GlobalAppContainers } from './containers';
import { PageNotFond } from './pages/404page';
import { AuthPage } from './pages/auth';
import { SignInContainer } from './containers/auth/signin/signIn';
import { SignUpContainer } from './containers/auth/signup/signup';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.HOME_PATHS} element={<GlobalAppContainers />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path={PATHS.AUTH_PATHS.MAIN} element={<AuthPage />}>
          <Route path={PATHS.AUTH_PATHS.SIGNIN} element={<SignInContainer />} />
          <Route path={PATHS.AUTH_PATHS.SIGNUP} element={<SignUpContainer />} />
        </Route>
        <Route path={PATHS.NOT_FOUND_PATHS} element={<PageNotFond />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
