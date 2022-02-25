import React from 'react';

interface IContext {
  settings: IDefaultSettings;
  saveSettings: (values: IDefaultSettings) => void;
}

const defaultSettings = {
  theme: 'light',
};

interface IDefaultSettings {
  theme?: string;
}

export const LayoutContext = React.createContext<IContext>({} as IContext);

const LayoutProvider: React.FC<any> = ({ children, settings }) => {
  const [currentSettings, setCurrentSettings] = React.useState<IDefaultSettings>(defaultSettings || settings);

  const saveSettings = React.useCallback((values: Partial<IDefaultSettings>) => {
    if (!Object.keys(values).length) {
      setCurrentSettings(defaultSettings);
    }
    setCurrentSettings((v) => ({ ...v, ...values }));
  }, []);

  return <LayoutContext.Provider value={{ settings: currentSettings, saveSettings }}>{children}</LayoutContext.Provider>;
};

export default LayoutProvider;
