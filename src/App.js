import React, { Component } from 'react'; //Component is part of React library. Allows us to write html in a javascript file.
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component{
  constructor(){
    super(); //Calls constructor method of the Component class. Gives us access to this.state which exists on the class App.
              // Can set default value on the state object. Can use variables in the html to be rendered.
    this.state = {
      monsters: []  
    };
  }

  //Gets user data from the API and returns json.
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  render(){ //render method returns any html we want
    return ( 
     <div className="App">
       {/* Card list component with the props it requires */}
       <CardList monsters={ this.state.monsters } />
      </div>
    );
  }
}

//Everything between the divs is JSX which mimics what html does so we can create the virtual DOM 
//and break down each part of the app into components that keep getting re-rendered as we modify the state.
//The curly braces inside the JSX tells html that anything in between is a javascript expression.
//this.setState allows us to modify the properties and values on the state. 
//onClick, it will set the state to what ever we passed to it, and then re-render.
//Gives more control on what we want the components to display without altering default values.
//Anytime you use the map() function inside of render, or you have a list of the same jsx elements one after another, 
//they need a key attribute (and CRA will warn you about it if you miss it).


export default App;
