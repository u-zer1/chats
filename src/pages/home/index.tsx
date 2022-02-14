import React from 'react';
import './styles.css';

import { ReactComponent as ReactLogo } from '../../assets/icons/React-icon.svg';

export const HomePage: React.FC = () => {
  return (
    <div>
      <ReactLogo />
      <span>
        React skeleton
        <a href="https://github.com/u-zer1/CRA-skeleton-ts" target="_blank" rel="noreferrer">
          github
        </a>
      </span>
    </div>
  );
};
