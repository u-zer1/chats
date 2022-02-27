export const loadLocalStore = (key: string) => {
  try {
    const serializedStore = localStorage.getItem(key);
    return serializedStore !== null ? JSON.parse(serializedStore) : undefined;
  } catch (e) {
    return undefined;
  }
};

export const saveLocalStore = <T>(key: string, value: T) => {
  try {
    const serializedStore = JSON.stringify(value || '');
    localStorage.setItem(key, serializedStore);
  } catch (e: any) {
    return new Error(e);
  }
};
