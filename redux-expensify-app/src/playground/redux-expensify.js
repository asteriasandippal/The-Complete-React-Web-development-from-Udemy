console.log('redux-expesify');
import { createStore, combineReducers } from 'redux';


// EXPENSES REDUCERS
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

const filterReducerDefaultState =  {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

// STORE CREATION
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'Propasdf Asa',
        description: ' January Rent',
        note: 'This wae the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        test: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}

