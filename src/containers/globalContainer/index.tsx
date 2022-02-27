import React from 'react';
import { Outlet } from 'react-router-dom';

interface IGlobalAppContainers {
  theme?: string;
}

export const GlobalAppContainers: React.FC<IGlobalAppContainers> = ({ theme }) => {
  return (
    <div className={`page ${theme}`}>
      <div className="page__wrapper">
        <Outlet />
      </div>
    </div>
  );
};
