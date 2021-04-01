import React, { Component } from 'react'

class App extends Component {
  setLocalStorage() {
    localStorage.setItem('Arena', 'Selection Month');
  }

  getLocalStorage() {
    localStorage.getItem('Arena');
  }

  render() {
    return (
      <div className="app">
        <button onClick={this.setLocalStorage}>Set</button>
        <button onClick={this.getLocalStorage}>Get</button>
      </div>
    )
  }
}

export default App;
