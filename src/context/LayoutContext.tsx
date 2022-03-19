import React from 'react';

import { useLocalStorage } from 'core/hooks';

interface IContext {
  settings: IDefaultSettings;
  saveSettings: (values: IDefaultSettings) => void;
}

interface IDefaultSettings {
  darkMode?: boolean;
}

const defaultSettings = {
  darkMode: false,
};

export const LayoutContext = React.createContext<IContext>({} as IContext);

const LayoutProvider: React.FC = ({ children }) => {
  const [store, setStore] = useLocalStorage('mode');

  React.useEffect(() => {
    !store && setStore(defaultSettings);
  }, []);

  const saveSettings = (value: IDefaultSettings) => {
    value && setStore({ ...store, ...value });
  };

  return <LayoutContext.Provider value={{ settings: store, saveSettings: saveSettings }}>{children}</LayoutContext.Provider>;
};

export default LayoutProvider;
