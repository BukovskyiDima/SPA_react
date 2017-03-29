import { Component } from 'react';
import { Link } from 'react-router';

import Login from '../Login/Login';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (<div>
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/greeting">Greeting</Link></li>
      </ul>
      {this.props.children}
    </div>);
  }
}

export default Main;
