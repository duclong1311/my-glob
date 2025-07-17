const getToken = () => {
  return sessionStorage.getItem('token');
}

const getItem = key => {
  return sessionStorage.getItem(key);
};

const setItem = (key, object) => {
  sessionStorage.setItem(key, object);
};

const removeItem = key => {
  sessionStorage.removeItem(key);
};

const sessionStorageService = {
  getToken,
  getItem,
  setItem,
  removeItem,
};

export default sessionStorageService;