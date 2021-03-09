export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_COUNTER = "ADD_COUNTER";

// Action Creator - function
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