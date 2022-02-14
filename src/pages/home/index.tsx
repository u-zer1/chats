import React from 'react';
import './styles.css';

import { ReactComponent as ReactLogo } from '../../assets/icons/React-icon.svg';

export const HomePage: React.FC = () => {
  return (
    <div>
      <ReactLogo />
      <span>React skeleton</span>
    </div>
  );
};
