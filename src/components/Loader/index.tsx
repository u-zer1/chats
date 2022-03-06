import React from 'react';
import classNames from 'classnames';
import './styles.scss';

export const Loader: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={classNames('loader-loader', className)}>
      <div className="loader" />
    </div>
  );
};
