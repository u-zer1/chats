import React from 'react';
import classNames from 'classnames';
import './style.scss';

import { IFormFields } from '../types';

interface InputProps extends IFormFields<HTMLInputElement> {
  type: string;
  inputClassName?: string;
}

export const Input: React.FC<InputProps> = ({
  id,
  name,
  type,
  label,
  value,
  IconAfter,
  IconBefore,
  placeholder,
  className,
  inputClassName,
  onChange,
  autoComplete = 'off',
  IconBeforeClick,
  IconAfterClick,
}) => {
  return (
    <div className={classNames('input__wrapper', className)}>
      {label && <label htmlFor={id || name}>{label}</label>}
      <input
        id={id || name}
        type={type || 'text'}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={classNames('input', IconBefore && 'l__indent', IconAfter && 'r__indent', inputClassName)}
      />
      <div className="icon-container">
        {IconBefore && <img className="before-icon" src={IconBefore} onClick={IconBeforeClick} alt="before icon" />}
        {IconAfter && <img className="after-icon" onClick={IconAfterClick} src={IconAfter} alt="after icon" />}
      </div>
    </div>
  );
};
