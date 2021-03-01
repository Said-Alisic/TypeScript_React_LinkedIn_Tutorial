import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let firstValue: string = 'Sunny';

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          The value { firstValue } is of { typeof firstValue } type!
        </header>
      </div>
    );
  }

}

export default App;
