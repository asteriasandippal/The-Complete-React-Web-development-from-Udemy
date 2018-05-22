import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css'; 
import './styles/styles.scss';

import AppRouter from './routers/AppRouter';
import configureStore from '../src/store/configureStore';

import { addExpense } from '../src/actions/expenses';
import { setTextFilter } from '../src/actions/filters';
import getVisibleExpense from '../src/selectors/expenses';
import { setTimeout } from 'timers';

const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill'}));
store.dispatch(addExpense({description: 'Gas Bill'}));

store.dispatch(setTextFilter('bill'));

setTimeout(() => {
    store.dispatch(setTextFilter('Water'));    
}, 4000);

console.log(store.getState());

const state = store.getState();
const visibleExpenses = getVisibleExpense(state.expenses, state.filters);

console.log(visibleExpenses);


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
