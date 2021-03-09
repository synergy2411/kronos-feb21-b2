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
            return {
                ...state,
                result : [...state.result, state.counter]
            }
        case CounterActions.DELETE_RESULT:
            const duplicateResult = state.result.filter(function(value, index){
                return index !== action.payload
            })
            return {
                ...state,
                result : [...duplicateResult]
            }

        default:
            return state;
    }
}