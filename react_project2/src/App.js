import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Validation';
import Char from './Char';
class App extends Component {
  
  state = {
    userInput : ''
  }

  
  inputChangeHandler = (event) =>{
    this.setState({userInput:event.target.value});

  };

  deleteBoxHandler=( boxIndex) =>{
   
    const text= this.state.userInput.split('');
    text.splice(boxIndex,1);
    const updateText = text.join('');
    this.setState({userInput:updateText});
  }


  
  render() {
    let charList = this.state.userInput.split("").map( (each,index) => {
        return (
          <Char clicked={ () => this.deleteBoxHandler(index)}
           key = {index}char={each}/>
        );
    })

    return (
      <div className="App">
        Enter a String: <input onChange={this.inputChangeHandler}
        value={this.state.userInput}
        type="text" ></input>
         <p> 
           {/* {this.state.userInput.length} */}
         </p>
         <Validation length={this.state.userInput.length}/>
         {charList }
         
      </div>
    );
  }
}

export default App;
