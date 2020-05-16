import React, { useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer';
import {FormItems} from './formItems'
import {FormInput} from './forminput'

const Form = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
   

 
    console.log(state)
    return (
    <>
        <FormItems state={state}  dispatch={dispatch}/>
        <FormInput dispatch = {dispatch}/>
     </>
    )
}

export default Form