import React from 'react';
import './style.scss';

interface StatusProps {
  status: string;
}

export const Status: React.FC<StatusProps> = ({ status }) => {
  const isOnline = status === 'online' ? 'online' : status;
  const isOnlineColor = status === 'online' ? 'status-online' : status;

  return <span className={`status ${isOnlineColor}`}>{isOnline}</span>;
};
