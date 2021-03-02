import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Message from './Message';


const initialState = {
  name: 'Sunny',
  message: 'TypeScript is cool!!!'
}

// define new type - usually define state properly
type State = Readonly<typeof initialState>;

class App extends Component<any, State> {

  // define state as a readonly-variable and define its type
  readonly state: State = initialState;

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Message name='Sunny' message='this is a simple message for testing!!!'/>
          <Message name={this.state.name} message={this.state.message}/>
          <ul>
            
          </ul>
        </header>
      </div>
    );
  }

}

export default App;
