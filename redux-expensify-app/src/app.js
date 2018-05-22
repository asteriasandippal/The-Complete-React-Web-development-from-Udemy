import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'; 
import './styles/styles.scss';

import AppRouter from './routers/AppRouter';
import configureStore from '../src/store/configureStore';

import { addExpense } from '../src/actions/expenses';
import { setTextFilter } from '../src/actions/filters';
import getVisibleExpense from '../src/selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill'}));
store.dispatch(addExpense({description: 'Gas Bill'}));

store.dispatch(setTextFilter('bill'));

console.log(store.getState());

const state = store.getState();
const visibleExpenses = getVisibleExpense(state.expenses, state.filters);

console.log(visibleExpenses);

ReactDOM.render(<AppRouter/>, document.getElementById('app'));
