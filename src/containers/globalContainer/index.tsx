import React from 'react';
import './styles.css';

import { Outlet } from 'react-router-dom';
import { Footer, Header } from 'components';

export const GlobalAppContainers: React.FC = () => {
  return (
    <div className="page">
      <div className="page__header">
        <Header />
      </div>
      <main className="page__wrapper">
        <Outlet />
      </main>
      <div className="page__footer">
        <Footer />
      </div>
    </div>
  );
};
