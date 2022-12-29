import React, {useEffect,useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {todoListAction, addTodo} from "../actions-creator/todo-actions"

function InputBox(props) {
    const [input,setInput] = useState('')
    const dispatch = useDispatch()

    function clickHandler(){
        const todo = {
            id: new Date().valueOf(),
            title: input
        }
        dispatch(addTodo(todo))
        setInput('')
    }
    
    return (
        <>
            <input value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={clickHandler}>Add</button>
        </>
    );
}

export default InputBox;