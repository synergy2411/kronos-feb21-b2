export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_COUNTER = "ADD_COUNTER";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT"

// Action Creator - function

export function asyncIncrement(){
    return function(dispatch, getState){
        // Simulate the delay
        // Code for async programming eg. making XHR call, complex calculation etc
        setTimeout(function(){
            dispatch(onIncrement())
        }, 3000);
    }
}

export function itemDelete(index){
    return {
        type : DELETE_RESULT,
        payload : index
    }
}

export function onResultStore(){
    return {
        type : STORE_RESULT
    }
}

export function addCounter(payload){
    return {
        type : ADD_COUNTER,
        payload
    }
}

export function onIncrement(){
    return {
        type : INCREMENT
    }
}

export function onDecrement(){
    return {
        type : DECREMENT
    }
}