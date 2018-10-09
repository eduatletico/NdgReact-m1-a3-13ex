import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    textTyped: ''
  }
  updateText = (text) => {
    this.setState(() => ({
      textTyped: text
    }))
  }
  render() {
    const { textTyped } = this.state
	
	const mirroredText = textTyped === '' 
	? 'This should mirror the text you typed into the input field.'
	: textTyped.split("").reverse().join("")
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input 
			type="text"
			placeholder="Say Something" 
			onChange={(event) => this.updateText(event.target.value)} />
          <p className="echo">Echo:</p>
          <p>{mirroredText}</p>
        </div>
      </div>
    );
  }
}

export default App;
