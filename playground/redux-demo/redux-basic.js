const { createStore } = require("redux");


// Reducer
const initialState = {
    counter : 0
}
function counterReducer(state = initialState, action){
    if(action.type === "INCREMENT"){
        // return state.counter++;
        return {
            counter : state.counter + 1
        }
    }else if(action.type === "DECREMENT"){
        return {
            counter : state.counter - 1
        }
    } else if(action.type === "ADD_COUNTER"){
        return {
            counter : state.counter + action.payload
        }
    }
    return state;
}
// Store
let store = createStore(counterReducer);


// Subscribe

store.subscribe(function(){
    console.log(store.getState());
})

// Actions
store.dispatch({type : "INCREMENT"})
// console.log(store.getState());
store.dispatch({type : "DECREMENT"})
// console.log(store.getState());
store.dispatch({
    type : "ADD_COUNTER",
    payload : 10
})