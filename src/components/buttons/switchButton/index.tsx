import React from 'react';
import './style.scss';

interface SwitchButtonProps {
  name: string;
  onChange: () => void;
  value: boolean;
}

const Index: React.FC<SwitchButtonProps> = ({ name, onChange, value }) => {
  return (
    <label htmlFor={name} className="switch-button">
      <input id={name} name={name} onChange={onChange} type="checkbox" className="switch-button__input" checked={value} />
      <span className="switch-button__slider" />
    </label>
  );
};

export default Index;
