const getItem = (key: string): string | null => {
  return localStorage.getItem(key);
};

const setItem = (key: string, object: string): void => {
  localStorage.setItem(key, object);
};

const localStorageService = {
  getItem,
  setItem,
};

export default localStorageService;
