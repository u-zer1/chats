import React from 'react';

import { InterfaceAside } from './aside';
import { InterfaceMainContainer } from './main';

export const Interface: React.FC = () => {
  return (
    <>
      <InterfaceAside />
      <InterfaceMainContainer />
    </>
  );
};
