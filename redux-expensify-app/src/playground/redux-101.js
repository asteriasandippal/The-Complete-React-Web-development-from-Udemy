import {createStore} from 'redux';

// const incrementCount = (payload = {}) => ({
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' 
//                 ? payload.incrementBy : 1
// });

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({count} = {}) => ({
    type: 'SET',
    count
});

const store = createStore((state = {count: 0}, action) => {
    console.log('runing');
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch ({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

// unsubscribe();

// store.dispatch ({
//     type: 'INCREMENT'
// });
store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());

// store.dispatch({
//     type: 'RESET',
// });

store.dispatch(resetCount());

// store.dispatch ({
//     type: 'DECREMENT',
//     decrementBy: 10
// });

// store.dispatch ({
//     type: 'DECREMENT'
// });

store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(decrementCount());

// store.dispatch({
//     type: 'SET',
//     count: 101
// });

store.dispatch(setCount({count: 1032}));

// console.log(store.getState());
