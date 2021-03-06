// Dependencies
import React, { Component } from 'react';

// Custom components
import CoinGame from '../CoinGame/';

// Styles
import './index.scss';


class App extends Component {

  render() {
    return (
      <div className="app">
        <div className="app__coin-game">
          <CoinGame />
        </div>
      </div>
    );
  }

}

export default App;
