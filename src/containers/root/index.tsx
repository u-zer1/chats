import React from 'react';
import { Outlet } from 'react-router-dom';

interface IRootAppContainers {
  theme?: string;
}

export const RootAppContainer: React.FC<IRootAppContainers> = ({ theme }) => {
  return (
    <div className={`page ${theme}`}>
      <div className="page__wrapper">
        <Outlet />
      </div>
    </div>
  );
};
