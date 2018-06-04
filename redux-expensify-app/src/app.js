import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css'; 
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import AppRouter from './routers/AppRouter';
import configureStore from '../src/store/configureStore';

import { addExpense } from '../src/actions/expenses';
import { setTextFilter } from '../src/actions/filters';
import getVisibleExpense from '../src/selectors/expenses';
import { setTimeout } from 'timers';
import './firebase/firebase';

const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill', amount: 4500}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 2400}));
store.dispatch(addExpense({description: 'Rent', amount: 3200}));

console.log(store.getState());

const state = store.getState();
const visibleExpenses = getVisibleExpense(state.expenses, state.filters);

console.log(visibleExpenses);
console.log('testing');
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
