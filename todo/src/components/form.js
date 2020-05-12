import React, {useState , useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer';

const Form = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [todoText, setTodoText] = useState('')

    const handleChanges = e => {
        setTodoText(e.target.value)
    }
    console.log(state)
    return (
    <div>
        <div>
           {state.map(item => (
              <div key={item.id} className='todoListDiv'>
                <h3
                onClick={()=>dispatch({ type: 'TOGGLE_COMPLETED'})}
                className = {state.completed ? 'toggleTrue' : 'toggleFalse'}
                >{item.item}</h3>
                
              </div>

           ))} 
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
            <button
            onClick={()=>{dispatch({type:'CLEAR_COMPLETED'}) 
            }}
            >
            Clear Completed  
            </button> 
        </div>
    </div>   
    )
}

export default Form