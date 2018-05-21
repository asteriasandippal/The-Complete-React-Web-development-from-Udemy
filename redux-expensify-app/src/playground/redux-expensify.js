console.log('redux-expesify');
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = ({ 
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}) => ({
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
);

const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
});


const editExpense = (id, update) => ({
    type: 'EDIT_EXPENSE',
    id,
    update

});

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// EXPENSES REDUCERS
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            // return state.concat(action.expense)
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id);
        case 'EDIT_EXPENSE':
            return  state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.update
                    }
                } else {
                    return expense;
                }
            })
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
        case 'SET_TEXT_FILTER':
        return {
            ...state,
            text: action.text
        }
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

store.subscribe(() => {
    console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 450}));
const expenseThree = store.dispatch(addExpense({description: 'Tea', amount: 120}));

store.dispatch(removeExpense({id: expenseTwo.expense.id}));

console.log(expenseTwo.expense.id);

store.dispatch(editExpense(expenseThree.expense.id, {amount: 500}));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

const demoState = {
    expenses: [{
        id: 'Propasdf Asa',
        description: ' January Rent',
        note: 'This wae the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}

const user = {
    name: 'sandip',
    age: 32
}
console.log({
    ...user,
    location: 'Kolkata',

});