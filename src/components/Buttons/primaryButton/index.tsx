import React from 'react';
import './style.scss';

interface ButtonProps {
  label?: string;
  type: btnTypes;
  color?: btnColor;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: string;
  className?: string;
  disable?: boolean;
}

type btnColor = 'primary' | 'green';
type btnTypes = 'button' | 'submit' | 'reset';

export const PrimaryButton: React.FC<ButtonProps> = ({ label, onClick, type, color = 'primary', disable = false, icon, className }) => {
  const buttonType: btnTypes = type as btnTypes;
  return (
    <button type={buttonType} onClick={onClick} className={`button button__color-${color} ${className}`} disabled={disable}>
      {icon && <img className="button__icon" src={icon} alt="google" />}
      {label}
    </button>
  );
};
