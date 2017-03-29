import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Greeting from 'routes/Greeting';
import Login from 'routes/Login';
import './app.scss';
import './fakeServer';
import Main from './routes/Main/Main';

const rootRoute = {
  path: '/',
  component: Main,

  childRoutes: [
    Greeting,
    Login
  ]
};

ReactDOM.render((
  <Router
    history={browserHistory}
    routes={rootRoute}
  />
), document.getElementById('root'));
