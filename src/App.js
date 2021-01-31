import React, { Component } from 'react'; //Allows us to write html in a javascript file
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super(); //Calls constructor method on the Component class. Gives us access to this.state which exists on the class App.

    // Can set default value on the state object. Can use variables in the html to be rendered.
    this.state = {
      string: "Hello React"
    };
  }
  render(){ //render method returns any html we want
    return ( //Everything between the divs is JSX which mimics what html does so we can create the virtual DOM 
              //and break down each part of the app into components that keep getting re-rendered as we modify the state.
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.string} {/* The curly braces inside the JSX tells html that anything in between is a javascript expression. */}
          </p>
          <button onClick = {() => this.setState({ string: "Hello Greg" })}> 
          Change Text
          </button> {/*this.setState allows us to modify the properties and values on the state. 
          onClick, it will set the state to what ever we passed to it, and then re-render.
          Gives more control on what we want the components to display without altering default values. */}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


export default App;
