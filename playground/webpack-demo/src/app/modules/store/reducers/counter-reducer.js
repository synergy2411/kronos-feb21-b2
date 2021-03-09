import * as CounterActions from "../actions/counter-actions";

const initialState = {
    counter: 0,
    result : []
}

export default function counterReducer(state = initialState, action) {
    switch (action.type) {
        case CounterActions.INCREMENT:
            return Object.assign({}, state, {counter : state.counter + 1});     // {counter, result} 
        case CounterActions.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case CounterActions.ADD_COUNTER:
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case CounterActions.STORE_RESULT:
            console.log("REDUCER STORE_RESULT")
            return {
                ...state,
                result : [...state.result, state.counter]
            }

        default:
            return state;
    }
}