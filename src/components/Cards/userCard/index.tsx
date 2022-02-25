import React from 'react';
import './style.scss';

import { Avatar } from 'components';
import { IUser } from 'core/types';

interface UserCardProps {
  user: IUser;
  index: number | undefined;
  active?: number;
}

const UserCard: React.FC<UserCardProps> = ({ user: { img, name, lastSeen, prevMessage, notify }, index, active }) => {
  const isActive = active === index ? 'user-active' : '';
  return (
    <div className={`user-card ${isActive}`}>
      <div className="user-card__left">
        <Avatar img={img} />
      </div>
      <div className="user-card__right">
        <div className="user-card__info">
          <span className="user-card__name">{name}</span>
          <span className="user-card__lastseen">{`${lastSeen} m`}</span>
        </div>
        <div className="user-card__message">{prevMessage}</div>
        <div className="user-card__tags">{notify}</div>
      </div>
    </div>
  );
};

export default UserCard;
