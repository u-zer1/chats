import React from 'react';
import './styles.scss';

import { Outlet } from 'react-router-dom';

export const GlobalAppContainers: React.FC = () => {
  return (
    <div className="page">
      <div className="page__wrapper">
        <Outlet />
      </div>
    </div>
  );
};
