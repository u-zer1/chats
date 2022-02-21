import React from 'react';
import './style.scss';

import { Link } from 'react-router-dom';

interface ButtonProps {
  label: string;
  path: string;
  color?: btnColor;
  icon?: string;
  className?: string;
}

type btnColor = 'primary' | 'green';

const PrimaryLink: React.FC<ButtonProps> = ({ icon, label, path, color = 'primary', className }) => {
  return (
    <Link to={path} className={`button button__color-${color} ${className}`}>
      {icon && <img className="button__icon" src={icon} alt="google" />}
      {label}
    </Link>
  );
};

export default PrimaryLink;
