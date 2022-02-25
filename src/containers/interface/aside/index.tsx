import React, { ChangeEvent } from 'react';
import './styles.scss';

import { IUser } from 'core/types';
import { userList } from 'core/mock/userListMock';

import { Input, List, PrimaryButton, Togglebutton } from 'components';

import PlusIcon from 'assets/icons/interface/plus__icon.svg';
import SearchIcon from 'assets/icons/interface/search__icon.svg';
import UserCard from 'components/Cards/userCard';

export const InterfaceAside: React.FC = () => {
  const [themeMode, setThemeMode] = React.useState<boolean>(false);
  const [search, setSearch] = React.useState<string>('');
  const [active, setActive] = React.useState<number>(0);

  return (
    <aside className="aside">
      <div className="aside-top">
        <Togglebutton name="theme-mode" onChange={() => setThemeMode(!themeMode)} value={themeMode} />
        <PrimaryButton className="aside-top__button" icon={PlusIcon} type="button" color="green" />
      </div>
      <div className="aside-content">
        <div className="aside-search">
          <Input
            beforeIcon={SearchIcon}
            type="text"
            name="search"
            className="aside-input"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            placeholder="Search messages"
            value={search}
          />
        </div>
        <div className="aside-user__list">
          <List
            scroll
            items={userList}
            onClick={(idx) => setActive(idx)}
            renderItem={(user: IUser, index) => {
              return <UserCard index={index} user={user} active={active} />;
            }}
          />
        </div>
      </div>
    </aside>
  );
};
