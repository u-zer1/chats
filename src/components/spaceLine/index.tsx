import React from 'react';
import './styles.scss';

interface InterfaceProps {
  text: string;
  width: number;
}

const SpaceLine: React.FC<InterfaceProps> = ({ text, width }) => {
  return (
    <div style={{ width: `${width}px` }} className="line">
      {text}
    </div>
  );
};

export default SpaceLine;
