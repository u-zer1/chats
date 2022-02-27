import React from 'react';
import './styles.scss';

import { messageList } from 'core/mock/userCoversation';

import { Avatar, ConversationCard, Input, List, Status } from 'components';

import SearchIcon from 'assets/icons/interface/search__icon.svg';
import { IMessage } from 'core/types';

export const InterfaceMainContainer: React.FC = () => {
  return (
    <main className="main">
      <div className="main-top">
        <div className="user-info">
          <div className="user-image__wrapper">
            <Avatar />
          </div>
          <div className="user-info__wraper">
            <div className="user-name">Florencio Dorrance</div>
            <div className="user-status">
              <Status status="online" />
            </div>
          </div>
        </div>
        <Input afterIcon={SearchIcon} name="search" onChange={() => console.log('')} type="text" placeholder="search..." />
      </div>
      <div className="main-content">
        <List
          scroll
          items={messageList}
          renderItem={(data: IMessage) => {
            return <ConversationCard message={data.message} avatar={data.avatar} person={data.person} />;
          }}
        />
      </div>
    </main>
  );
};
