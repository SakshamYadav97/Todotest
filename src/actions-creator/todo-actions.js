import {TODO_LIST, ADD_TODO, DELETE_TODO} from "../constants/constants"

export function todoListAction(){
    return {
        type:TODO_LIST
    }
}

export function addTodo(todo){
    return {
        type:ADD_TODO,
        payload: todo
    }
}

export function deleteToDo(id){
    return {
        type: DELETE_TODO,
        payload: id
    }
}