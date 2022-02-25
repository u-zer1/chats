import React from 'react';
import PATHS from 'routes/paths';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalAppContainers } from 'containers';

import AuthPage from 'pages/auth';
import PageNotFond from 'pages/404page';
import InterfacePage from 'pages/interface';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.AUTH} element={<AuthPage />} />
        <Route path={PATHS.NOT_FOUND_PATHS} element={<PageNotFond />} />
        <Route path={PATHS.HOME_PATHS} element={<GlobalAppContainers />}>
          <Route index element={<InterfacePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
