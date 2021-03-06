import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { value: 0 }
    this.inc = this.inc.bind(this)
    this.dec = this.dec.bind(this)
    // put these in since w/in funcitons, `this` is reserved for higher funcitno
  }

  // inc() {
  //   this.setState({ value: this.state.value + 1})
  //   }

  inc() {
    this.setState( (state) => {
      return {value: state.value + 1}
    })
  }
  // dec() {
  //     this.setState({ value: this.state.value - 1})
  // }
  dec() {
    this.setState( (state) => {
      return {value: state.value + 1}
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Counter Example</h1>
        </header>
        <div>
          <p>{this.state.value}</p>
          <button onClick={this.inc}>+</button>
          <button onClick={this.dec}>-</button>
        </div>
      </div>
    );
  }
}
export default App;


///more words
