import React from 'react';
import classNames from 'classnames';
import '../styles.scss';

interface ButtonProps {
  label?: string;
  type: btnTypes;
  color?: btnColor;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disable?: boolean;
  Icon?: any;
}

type btnColor = 'primary' | 'green' | 'blue';
type btnTypes = 'button' | 'submit' | 'reset';

export const PrimaryButton: React.FC<ButtonProps> = ({ label, onClick, type, color = 'primary', disable = false, Icon, className }) => {
  const buttonType: btnTypes = type as btnTypes;
  return (
    <button type={buttonType} onClick={onClick} className={classNames(`button button__color-${color}`, className)} disabled={disable}>
      {Icon && <Icon className="button__icon" />}
      {label}
    </button>
  );
};
