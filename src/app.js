import './app.scss';
import './fakeServer';
import { Router, browserHistory } from 'react-router';

...

const rootRoute = {
    path: '/',
    component: Main,

    childRoutes: []
};

ReactDOM.render((
    <Router
        history={browserHistory}
        routes={rootRoute}
    />
), document.getElementById('root'));