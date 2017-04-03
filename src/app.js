import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Greeting from 'routes/Greeting';
import Login from 'routes/Login';
import Main from 'routes/Main/Main';
import './fakeServer';
import './app.scss';

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
    history={createHistory()}
  >
    <div>
      <Route path="/" component={Main} />
      <Route path="/greeting" component={Greeting} />
      <Route path="/login" component={Login} />
    </div>

  </Router>
), document.getElementById('root'));
