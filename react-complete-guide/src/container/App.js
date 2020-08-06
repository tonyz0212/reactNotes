import React, { Component } from 'react';
import './App.css';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import styled from 'styled-components';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc//WithClass';

const StyleButton = styled.button`
  background-color: green;
  color:white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover{
    background-color: lightgreen;
    color:black; 
  }
  `;

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons: [
      { id: 'wa', name: 'Max', age: 28 },
      { id: 'asd', name: 'Manu', age: 29 },
      { id: 'asddads', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPerson: false
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDeriviedStateProps', props);
    return state;
  }

  componentWillMount(){
    console.log(' WILL MOUNT');
  }

  componentDidMount(){
    console.log('[App.js] componenetdidmount');
    
  }




  nameChangedHandler = (event, id) => {
    const personID = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personID]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personID] = person;

    this.setState({ persons: persons });
  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });

  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {
    console.log(' [App.js] render')
    
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPerson) {
      persons = <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />

      style.backgroundColor = 'red';
    }


    return (
      <WithClass classes ={classes.App}>
        <Cockpit
        title = {this.props.appTitle}
          showPerson={this.state.showPerson}
          persons={this.state.persons}
          clicked = {this.togglePersonsHandler}
        />
        {persons}
      </WithClass>
    );
  }
}

export default App;
