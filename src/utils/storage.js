export default class storage {
  static get = (key) => {
    return JSON.parse(sessionStorage.getItem(key));
  };
  static set = (key, value) => {
    return sessionStorage.setItem(key, JSON.stringify(value));
  };
}
