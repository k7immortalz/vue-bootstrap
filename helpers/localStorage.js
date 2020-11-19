export default {
  set(key, value) {
    if(typeof value === 'object') {
      localStorage.setItem(key, JSON.stringify(value));
    }else {
      localStorage.setItem(key, value);
    }
  },
  get(key) {
    return localStorage.getItem(key) && JSON.parse(localStorage.getItem(key));
  },
  remove(key){

  },
  clear() {
    localStorage.clear();
  },
  getSession() {
    return this.get('user');
  }
}
