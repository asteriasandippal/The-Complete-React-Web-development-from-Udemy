console.log('redux-expesify');
import { createStore, combineReducers } from 'redux';

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

