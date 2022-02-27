import React from 'react';
import PATHS from 'routes/paths';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LayoutContext } from 'context/LayoutContext';
import { GlobalAppContainers } from 'containers';

import AuthPage from 'pages/auth';
import PageNotFond from 'pages/404page';
import InterfacePage from 'pages/interface';

export const App: React.FC = () => {
  const { settings } = React.useContext(LayoutContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.AUTH} element={<AuthPage />} />
        <Route path={PATHS.NOT_FOUND_PATHS} element={<PageNotFond />} />
        <Route path={PATHS.HOME_PATHS} element={<GlobalAppContainers {...settings} />}>
          <Route index element={<InterfacePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
