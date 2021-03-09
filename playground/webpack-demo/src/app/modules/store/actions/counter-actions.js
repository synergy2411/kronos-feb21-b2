export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_COUNTER = "ADD_COUNTER";
export const STORE_RESULT = "STORE_RESULT";

// Action Creator - function

export function onResultStore(){
    console.log("Action STORE_RESULT")
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