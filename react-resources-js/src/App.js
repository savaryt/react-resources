import React, { Component } from 'react';
import styles from './styles.scss';

class App extends Component {
  state = {
    world: null
  }

  setWorld = () => {
    this.setState({ world: 'hello' })
  }

  render() {
    return (
      <div>
        <div>{this.state.world}</div>
        <button className={styles.helloWorld} onClick={this.setWorld}>Set world</button>
      </div>
    )
  }
}

export default App;