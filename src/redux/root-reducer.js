import { combineReducers } from "redux";

import todosReducer from './reducer';

const rootReducer = combineReducers({
    todos: todosReducer, // "todos" is the key through which we can currnt state from  the store in our react component

})


export default rootReducer;