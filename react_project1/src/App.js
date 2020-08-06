import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';


class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     username : 'Watever'
  //   }

  // }
  state ={
    username: 'Fuck You'
  }
  changeInputHandler = (event) =>{ 
    this.setState({username:event.target.value})
  };
  
  
  render() {
    return (
      <div className="App">
        <UserInput 
        change={this.changeInputHandler}
        currentName={this.state.username}/>
        <UserOutput username='Steve' />
        <UserOutput username='Mike' />
        <UserOutput username={this.state.username} />
        
      </div>
    );
  }
}

export default App;
