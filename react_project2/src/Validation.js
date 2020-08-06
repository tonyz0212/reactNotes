import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const validation = (props) =>{
 
    let msg = "This msg is too short";
    if( props.length > 5 ){
        msg ="TOO LONG";
    }
    return (
        <div>
             <p>
             {msg}
                  </p>
        </div>
    );
};


export default validation;
