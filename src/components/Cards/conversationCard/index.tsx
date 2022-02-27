import React from 'react';
import './style.scss';

import { Avatar, List } from 'components';
import { IMessage } from 'core/types';

export const ConversationCard: React.FC<IMessage> = ({ message, avatar, person }) => {
  const selectedDirections = person === 'me' ? 'dir-right' : 'dir-left';
  return (
    <div className={`conversation ${selectedDirections}`}>
      <div className="conversation__left">
        <Avatar img={avatar} />
      </div>
      <div className="conversation__right">
        <List className="conversation__list" items={message} renderItem={(e: string) => <span className="conversation__text">{e}</span>} />
      </div>
    </div>
  );
};
