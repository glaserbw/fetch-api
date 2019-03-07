import React, { Component } from 'react';
import './App.css';
import AllUsers from './AllUsers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>IQVIA Users with Fetch</div>
        </header>
        <AllUsers />
      </div>
    );
  }
}

export default App;
