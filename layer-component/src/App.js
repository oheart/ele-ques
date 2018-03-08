import React, { Component } from 'react';
import './App.css';
import Demo2 from './Demo2'
import Demo1 from './Demo1'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Demo1 />
          <Demo2 />
      </div>
    );
  }
}

export default App;
