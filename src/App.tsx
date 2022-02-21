import React from 'react';
import PATHS from 'routes/paths';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { InterfacePage } from 'pages/interface';
import { AuthPage } from 'pages/auth';
import { GlobalAppContainers } from 'containers/globalContainer';
import { PageNotFond } from 'pages/404page';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.HOME_PATHS} element={<GlobalAppContainers />}>
          <Route index element={<InterfacePage />} />
        </Route>
        <Route path={PATHS.AUTH} element={<AuthPage />} />
        <Route path={PATHS.NOT_FOUND_PATHS} element={<PageNotFond />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
