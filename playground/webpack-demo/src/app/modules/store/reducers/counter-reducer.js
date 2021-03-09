import * as CounterActions from "../actions/counter-actions";

const initialState = {
    counter: 0
}

export default function counterReducer(state = initialState, action) {
    switch (action.type) {
        case CounterActions.INCREMENT:
            return {
                counter: state.counter + 1
            }
        case CounterActions.DECREMENT:
            return {
                counter: state.counter - 1
            }
        case CounterActions.ADD_COUNTER:
            return {
                counter: state.counter + action.payload
            }

        default:
            return state;
    }
}