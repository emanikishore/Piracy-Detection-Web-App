import React, { Component } from 'react';
import Login from './components/Login';
import KeywordSearch from './components/KeywordSearch';
import './App.css';

class App extends Component {
  state = {isAuthenticated: false}

  handleLoginSuccess = () => {
    this.setState({ isAuthenticated: true });
  };

  render() {
    const {isAuthenticated} = this.state
    return (
      <div className="App">
        {isAuthenticated ? (
          <KeywordSearch />
        ) : (
          <Login onLoginSuccess={this.handleLoginSuccess} />
        )}
      </div>
    );
  }
}

export default App;



