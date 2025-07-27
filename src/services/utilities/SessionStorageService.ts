const getToken = () : string | null => {
  return sessionStorage.getItem('token');
}

const getItem = (key: string) : string | null => {
  return sessionStorage.getItem(key);
};

const setItem = (key: string, object: string) : void => {
  sessionStorage.setItem(key, object);
};

const removeItem = (key: string) : void => {
  sessionStorage.removeItem(key);
};

const sessionStorageService = {
  getToken,
  getItem,
  setItem,
  removeItem,
};

export default sessionStorageService;