export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

// Action Creator - function
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