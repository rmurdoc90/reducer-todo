import React, {useState , useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer';

const Form = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [todoText, setTodoText] = useState('')

    const handleChanges = e => {
        setTodoText(e.target.value)
    }

    return (
    <div>
        <div>
           {state.map} 
        </div>
        <div>
           <input
           className='todo-input'
           type='text'
           name='todoText'
           value={todoText}
           onChange={handleChanges}
           />
           <button
            onClick={()=>{dispatch({type:'ADD_TODO', payload: todoText}) 
            }}
            >
            Add Item    
            </button> 
        </div>
    </div>   
    )
}

export default Form