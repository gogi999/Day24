import React, { Component } from 'react'

class App extends Component {
  setLocalStorage() {
    localStorage.setItem('Arena', 'Selection Month');
  }

  render() {
    return (
      <div className="app">
        <button onClick={this.setLocalStorage}>Set</button>
      </div>
    )
  }
}

export default App;
