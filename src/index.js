import {createStore,combineReducers,applyMiddleware} from 'redux';// import store, combineReducers,applyMiddleware from redux
import logger from "redux-logger";//import logger middleware from redux-logger
// set initial state
const initialSate = {
  initialValue:0,
  listArray:[]
}
// first reducer
const mathReducer = (state = initialSate,action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        initialValue:state.initialValue + action.payload,
        listArray:[...state.listArray, action.payload]
      };
      break
    case "SUBTRACT":
    state = {
      ...state,
      initialValue:state.initialValue - action.payload,
      listArray:[...state.listArray, action.payload]
    };
    break;
  }
  return state;
}
// second reducer
const addTodoReducer = (state = {todoList:[]},action) => {
  switch (action.type) {
    case "ADD_TODO":
      state = {
        ...state,
        todoList:[...state.todoList, action.payload]
      };
      break
  }
  return state;
}
// createStore(reducers,initialSate,middleware)
// create store with single reducer

 // let store = createStore(mathReducer);

 // create store with multiple reducer using "combineReducers" combineReducers({js object})

// let store = createStore(combineReducers({
//   mathStore:mathReducer,
//   todoList:addTodoReducer
// }));

// create store with middleware "applyMiddleware"

// create a custom middleware
const myLogger = (store) => (next) => (action) =>{
  console.log("custom Logger action",action);
  next(action);
}

let store = createStore(combineReducers({
  mathStore:mathReducer,
  todoList:addTodoReducer
}),{},applyMiddleware(logger, myLogger));

window.store = store;
// store.subscribe(() =>{
//   console.log("store data",store.getState());
// })
// store.dispatch({// dispatch any action
//   type:"ADD",
//   payload:10
// });
