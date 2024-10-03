import React, { Component } from 'react';
import "./index.css"

class Login extends Component {

  state = {username:'',password:'',error:''}

  handleUsername = event => {
    this.setState({username:event.target.value})
  }

  handlePassword = event => {
    this.setState({password:event.target.value})
  }

  handleLogin = () => {
    const { username, password } = this.state;
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (username === storedUser.username && password === storedUser.password) {
      this.setState({ error: '' });
      this.props.onLoginSuccess();
    } else {
      this.setState({ error: 'Invalid credentials. Please try again.' });
    }
  };

  render() {
    const {username,password,error} = this.state
    return (
      <div className="login-container">
        <h2 className='heading'>Login</h2>
        <div>
          <label>
            Username:
            <input
              type="text"
              name="username"
              className='input-box'
              value={username}
              onChange={this.handleUsername}
              placeholder="Enter Username"
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              className='input-box'
              value={password}
              onChange={this.handlePassword}
              placeholder="Enter Password"
            />
          </label>
        </div>
        <button onClick={this.handleLogin} className='login-btn'>Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    );
  }
}

export default Login;
