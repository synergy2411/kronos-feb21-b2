export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_COUNTER = "ADD_COUNTER";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT"

// Action Creator - function
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