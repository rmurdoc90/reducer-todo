    import React, {useState} from 'react';

    export const FormInput = props => {
        const [todoText, setTodoText] = useState('')
        return (
        <div>
            <input
            className='todo-input'
            type='text'
            name='todoText'
            value={todoText}
            onChange={e =>setTodoText(e.target.value) }
            />
            <button
            onClick={()=>{props.dispatch({type:'ADD_TODO', payload: {todoText}}) 
            }}
            >
            Add Item    
            </button>
            <button
            onClick={()=>{props.dispatch({type:'CLEAR_COMPLETED'}) 
            }}
            >
            Clear Completed  
            </button> 
        </div>
        )
    }