import React from 'react'

const style = {
    display: 'inline-block',
    padding: '12px',
    textAlign:'center',
    margin:'40px',
    border: '1px solid black'
    
}

const char = (props) =>{

    return (
        <div style={style} onClick={props.clicked}>
         {props.char}
        </div>
    );


}

export default char;