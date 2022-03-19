import React from 'react';
import './styles.scss';

import { LayoutContext } from 'context/LayoutContext';
import { Input, List, PrimaryButton, Togglebutton, UserCard } from 'components';

import { IUser } from 'core/types';
import { userList } from 'core/mock/userListMock';

import { ReactComponent as PlusIcon } from 'assets/icons/interface/plus__icon.svg';
import { ReactComponent as SearchIcon } from 'assets/icons/interface/search__icon.svg';

export const InterfaceAside: React.FC = () => {
  const { settings, saveSettings } = React.useContext(LayoutContext);
  const [themeMode, setThemeMode] = React.useState<boolean>(settings.darkMode || false);

  const [search, setSearch] = React.useState<string>('');
  const [active, setActive] = React.useState<number>(0);

  const handleThemeMode = (mode: boolean) => {
    setThemeMode(mode);
    saveSettings({ darkMode: mode });
  };

  return (
    <aside className="aside">
      <div className="aside-top">
        <Togglebutton name="theme-mode" onChange={() => handleThemeMode(!themeMode)} value={themeMode} />
        <PrimaryButton className="aside-top__button" Icon={PlusIcon} type="button" color={themeMode ? 'blue' : 'green'} />
      </div>
      <div className="aside-content">
        <div className="aside-search">
          <Input
            type="text"
            name="search"
            value={search}
            className="aside-input"
            placeholder="Search messages"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            IconBefore={SearchIcon}
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
