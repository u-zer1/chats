import React from 'react';
import './styles.scss';

import { Input, List, PrimaryButton, Togglebutton, UserCard } from 'components';

import { IUser, EMODE } from 'core/types';
import { LayoutContext } from 'context/LayoutContext';

import { useLocalStorage } from 'core/hooks';
import { userList } from 'core/mock/userListMock';

import PlusIcon from 'assets/icons/interface/plus__icon.svg';
import SearchIcon from 'assets/icons/interface/search__icon.svg';

export const InterfaceAside: React.FC = () => {
  const [store] = useLocalStorage('mode');

  const { saveSettings } = React.useContext(LayoutContext);
  const [themeMode, setThemeMode] = React.useState<boolean>(store?.theme === EMODE.DARK || false);

  const [search, setSearch] = React.useState<string>('');
  const [active, setActive] = React.useState<number>(0);

  React.useEffect(() => {
    const mode = themeMode ? EMODE.DARK : EMODE.LIGHT;
    saveSettings({ theme: mode });
  }, [themeMode]);

  return (
    <aside className="aside">
      <div className="aside-top">
        <Togglebutton name="theme-mode" onChange={() => setThemeMode(!themeMode)} value={themeMode} />
        <PrimaryButton className="aside-top__button" icon={PlusIcon} type="button" color={themeMode ? 'blue' : 'green'} />
      </div>
      <div className="aside-content">
        <div className="aside-search">
          <Input
            beforeIcon={SearchIcon}
            type="text"
            name="search"
            className="aside-input"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
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
