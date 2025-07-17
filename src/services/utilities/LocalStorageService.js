const getItem = key => {
  return localStorage.getItem(key);
};

const setItem = (key, object) => {
  localStorage.setItem(key, object);
};

const localStorageService = {
  getItem,
  setItem,
}

export default localStorageService;