import React from 'react';

/**
 * Hook for managing local storage
 *
 * @param key the key to save in local storage
 * @param initialValue storage initial value
 */

export const useLocalStorage = <Type>(key: string, initialValue?: Type) => {
  const loadStore = () => {
    try {
      const serializedStore = localStorage.getItem(key);
      return serializedStore !== null ? JSON.parse(serializedStore) : undefined;
    } catch (e) {
      return undefined;
    }
  };

  const saveStore = (value: any) => {
    try {
      const serializedStore = JSON.stringify(value || initialValue);
      localStorage.setItem(key, serializedStore);
    } catch (e: any) {
      return new Error(e);
    }
  };

  const [store, setStore] = React.useState<any>(loadStore());

  React.useEffect(() => {
    saveStore(store);
  }, [store]);

  const removeStore = () => localStorage.removeItem(key);

  return [store, setStore, removeStore];
};
