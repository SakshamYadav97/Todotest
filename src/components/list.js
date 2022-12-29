import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {todoListAction, deleteToDo} from "../actions-creator/todo-actions"

function List(props) {
    const todoList = useSelector((state)=>state.todoList)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(todoListAction())
    },[todoList])

    function deleteHandler(id){
        dispatch(deleteToDo(id))
    }

    return (
        <div>
            {
                todoList.map((item)=>
                    <div key={item.id} style={{}}>
                        {item.title}
                        <button onClick={()=>deleteHandler(item.id)}>Delete</button>
                    </div>
                )
            }
        </div>
    );
}

export default List;