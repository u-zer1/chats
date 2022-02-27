import React from 'react';
import './style.scss';

import DefaultImg from 'assets/images/default-user__img.png';

interface AvatarProps {
  img?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ img }) => {
  return <img className="avatar" src={img || DefaultImg} alt="avatar" />;
};
