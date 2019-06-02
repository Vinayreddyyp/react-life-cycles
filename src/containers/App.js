import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("inside of constructor", props);
    this.state = {
    persons: [
    {id:'aaa',name: 'Vinay', age: 23},
    {id:'bbb',name:'Anusha', age:22},
      {id:'ccc',name:'Ashok', age:20}],

    showPersons: false,
   }
  }

  componentWillMount() {
     console.log("inside of componetWillRMount");
  }


deletePersonHandler = (personIndex) => {
  // const persons = this.state.persons.slice();
  const persons = [...this.state.persons];
  console.log("persons", persons);
  persons.splice(personIndex, 1);
  this.setState({persons: persons})

}
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
      };


      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

    this.setState({
      persons: persons})

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});


  }
  render() {
    console.log("inside of render");

    let persons = null;
    if(this.state.showPersons){
      persons = (
         <div>
         <Persons
         persons={this.state.persons}
         clicked={this.deletePersonHandler}
         changed={this.nameChangedHandler}/>
      </div>
      );
    }

    return (
      <Aux>
        <Cockpit
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}/>
        {persons}
      </Aux>
    );

  }

}

export default withClass(App);
