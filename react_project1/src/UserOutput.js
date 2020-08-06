import React from 'react'

const userOutput = (props) =>{
    return (
       <div>
           <p onClick = {props.click} > ? {props.username} </p>
           <p> b</p>
       </div>

    )
};

export default userOutput