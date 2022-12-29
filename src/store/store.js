import {createStore, combineReducers} from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import {todoListReducers} from '../reducers/todo-reducers'

const allReducer = combineReducers({todoList:todoListReducers})

const store = createStore(allReducer,composeWithDevTools())

export default store