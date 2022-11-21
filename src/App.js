import React, { Component } from 'react';
import Styles from './App.module.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

class App extends Component {
  render() {
    return (
      <>
        <div className={Styles.counterButton}>
          <ClickCounter />
          <br />
          <HoverCounter />
        </div>
      </>
    );
  }
}

export default App;
