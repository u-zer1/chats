import React from 'react';

import { EMODE } from 'core/types';
import { saveLocalStore } from 'core/helpers';

interface IContext {
  settings: IDefaultSettings;
  saveSettings: (values: IDefaultSettings) => void;
}

interface IDefaultSettings {
  theme?: string;
}

const defaultSettings = {
  theme: EMODE.LIGHT,
};

export const LayoutContext = React.createContext<IContext>({} as IContext);

const LayoutProvider: React.FC<any> = ({ children, settings }) => {
  const [currentSettings, setCurrentSettings] = React.useState<IDefaultSettings>(settings);

  React.useEffect(() => {
    if (currentSettings) saveLocalStore('mode', currentSettings);
  }, [currentSettings]);

  return (
    <LayoutContext.Provider value={{ settings: currentSettings, saveSettings: setCurrentSettings }}>{children}</LayoutContext.Provider>
  );
};

export default LayoutProvider;
