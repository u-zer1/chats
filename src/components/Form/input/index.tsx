import React from 'react';
import './style.scss';

interface InputProps {
  id?: string;
  name: string;
  label?: string;
  type: string;
  value?: any;
  afterIcon?: string;
  beforeIcon?: string;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  autoComplete?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  id,
  name,
  type,
  value,
  label,
  onChange,
  placeholder,
  beforeIcon,
  afterIcon,
  className,
  inputClassName,
  autoComplete = 'off',
}) => {
  const [visible, setVisible] = React.useState<boolean>(false);

  return (
    <div className={`input__item ${className || ''} ${beforeIcon || afterIcon ? 'input__icon' : ''}`}>
      {label && <label htmlFor={id || name}>{label}</label>}
      {beforeIcon && <img src={beforeIcon} alt="before icon" />}
      <input
        id={id || name}
        type={visible ? 'text' : type}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`input  ${afterIcon ? 'visible__indent' : ''} ${inputClassName}`}
      />
      {afterIcon && <img className="after-icon" onClick={() => setVisible(!visible)} src={afterIcon} alt="after icon" />}
    </div>
  );
};
