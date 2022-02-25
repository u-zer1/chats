import React from 'react';
import './style.scss';

import { Avatar, List } from 'components';

interface ConversationCardProps {
  message: string[];
  avatar: string;
  dirRight?: boolean;
}

const ConversationCard: React.FC<ConversationCardProps> = ({ message, avatar, dirRight }) => {
  const selectedDirections = dirRight ? 'dir-right' : 'dir-left';
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

export default ConversationCard;
