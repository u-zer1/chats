import React from 'react';
import '../styles.scss';

import { Link } from 'react-router-dom';

interface ButtonProps {
  label: string;
  path: string;
  color?: btnColor;
  className?: string;
  Icon?: any;
}

type btnColor = 'primary' | 'green';

export const PrimaryLink: React.FC<ButtonProps> = ({ Icon, label, path, color = 'primary', className }) => {
  return (
    <Link to={path} className={`button button__color-${color} ${className}`}>
      {Icon && <Icon className="button__icon" />}
      {label}
    </Link>
  );
};
