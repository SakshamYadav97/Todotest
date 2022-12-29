import {TODO_LIST, ADD_TODO, DELETE_TODO} from "../constants/constants"

 const defaultState = [
    {
        id: new Date().valueOf(),
        title: "Learn React"
    }
 ]

export function todoListReducers(state=defaultState,action){
    console.log("action.type",action.type,action.payload)
    switch(action.type){
        case TODO_LIST:
            return state
        case ADD_TODO:
            return [action.payload,...state]
        case DELETE_TODO:
            return state.filter((item)=>item.id !== action.payload)
        default:
            return state
    }
}