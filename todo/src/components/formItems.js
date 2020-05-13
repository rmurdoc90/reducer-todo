import React from 'react';

export const FormItems = props => {
    return(
    <div>
    
    {props.state.map(item => {

        <h3
        key={item.id} 
        onClick={()=>props.dispatch({ type: 'TOGGLE_COMPLETED', payload: item.id})}
        className = {item.completed ? 'completed' : ''}
        >{item.item}</h3>
     })})
    </div>
    )}