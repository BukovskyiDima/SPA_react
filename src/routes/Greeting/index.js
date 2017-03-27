export default {
    path: 'greeting',
    getComponent(nextState, cb) {
        System.import('./Greeting').then(module => cb(null, module.default));
    }
};