import { Component } from 'react';

import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(e) {
    const { email, password } = this._form;
    e.preventDefault();
  }

  render() {
    return (
      <form
        className="todo-login__form"
        onSubmit={this.submitHandler}
        ref={el => this._form = el}
      >

        <input
          type="text"
          name="email"
          placeholder="name"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
        />
        <input type="submit" />
      </form>
    );
  }
}

export default Login;
