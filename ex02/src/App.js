import React, { Component } from 'react'

class App extends Component {
  setMyStorage() {
    document.cookie = 'Year=2021';
    localStorage.setItem('Paragon', 'yes, but Arena first');
    sessionStorage.setItem('frontend', 'React')
  }

  getMyStorage() {
    const myCookieData = document.cookie.split('Year=')[1];
    const myLocalStorageData = localStorage.getItem('Paragon');
    const mySessionStorageData = sessionStorage.getItem('frontend');
    
    return [myCookieData, myLocalStorageData, mySessionStorageData];
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.setMyStorage}>Set</button>
        <button onClick={this.getMyStorage}>Get</button>
      </div>
    )
  }
}

export default App;