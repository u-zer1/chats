import React from 'react';
import { Outlet } from 'react-router-dom';
import { EMODE } from 'core/types';

interface IRootAppContainers {
  darkMode?: boolean;
}

export const RootAppContainer: React.FC<IRootAppContainers> = ({ darkMode }) => {
  return (
    <div className={`page ${darkMode ? EMODE.DARK : EMODE.LIGHT}`}>
      <div className="page__wrapper">
        <Outlet />
      </div>
    </div>
  );
};
