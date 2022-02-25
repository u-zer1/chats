import React from 'react';
import './style.scss';

interface TogglebuttonProps {
  name: string;
  onChange: () => void;
  value: boolean;
}

export const Togglebutton: React.FC<TogglebuttonProps> = ({ name, onChange, value }) => {
  return (
    <label htmlFor={name} className="switch-button">
      <input id={name} name={name} onChange={onChange} type="checkbox" className="switch-button__input" checked={value} />
      <span className="switch-button__slider" />
    </label>
  );
};
