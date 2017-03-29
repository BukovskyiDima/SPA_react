export default {
  path: 'login',
  getComponent(nextState, cb) {
    System.import('./Login').then(module => cb(null, module.default));
  }
};
