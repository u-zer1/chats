import React from 'react';
import './styles.scss';
import { Avatar, ConversationCard, Textarea, Input, List, PrimaryButton, Status } from 'components';

import { IMessage } from 'core/types';
import { messageList } from 'core/mock/userCoversation';

import { ReactComponent as MessageIcon } from 'assets/icons/interface/message__icon-white.svg';
import { ReactComponent as SearchIcon } from 'assets/icons/interface/search__icon.svg';

export const InterfaceMainContainer: React.FC = () => {
  const [text, setText] = React.useState<string>('');

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
        <Input
          name="search"
          type="text"
          placeholder="search..."
          className="input__item"
          onChange={() => console.log('')}
          IconAfter={SearchIcon}
        />
      </div>
      <div className="main-content">
        <List
          scroll
          items={messageList}
          renderItem={(data: IMessage) => {
            return <ConversationCard message={data.message} avatar={data.avatar} person={data.person} />;
          }}
        />
        <form className="new-message-wrapper">
          <Textarea
            className="new-message__text"
            name="chat-textarea"
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="message"
          />
          <PrimaryButton type="submit" className="new-message__send" Icon={MessageIcon} />
        </form>
      </div>
    </main>
  );
};
