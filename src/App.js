import React, { Component } from 'react'; //Component is part of React library. Allows us to write html in a javascript file.
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';


class App extends Component{
  constructor(){
    super(); //Calls constructor method of the Component class. Gives us access to this.state which exists on the class App.
              // Can set default value on the state object. Can use variables in the html to be rendered.
    this.state = {
      monsters: [],
      searchField: ''
    };

    //Context of 'this' is whatever we pass to it via .bind method. Needed if not using arrow function.
    //Without .bind, the handle change function below will have 'this' as undefined.
    //this.handleChange = this.handleChange.bind(this);
  }

  //Gets user data from the API and returns json. This is a lifecycle method.
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  //Due to arrow function, scope is wherever function is defined. Otherwise need .bind.
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render(){ //render method returns any html we want
    const { monsters, searchField } = this.state; //Destructered.

    //Uses the filter method to sift through the monsters array according to what is typed in the searchfield. 
    //Converted to lower case.
    //Re-renders each time.
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))

    // Return the component with the props they require.
    return ( 
     <div className='App'>
       <h1>Monster's Rolodex</h1>
       <SearchBox 
       placeholder='search monsters'
       handleChange={this.handleChange} />

       <CardList monsters={ filteredMonsters } />
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