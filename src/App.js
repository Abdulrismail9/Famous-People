import React, { Component } from 'react';
import Header from './header';
import FamousPerson from './famousPerson';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Header />
        <FamousPerson />
      </div>
    );
  }
}

export default App;
