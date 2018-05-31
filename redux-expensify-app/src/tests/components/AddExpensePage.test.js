import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

let addedExpense, history, wrapper;

beforeEach(() => {
    addedExpense = jest.fn();
    history = {
        push: jest.fn()
    };
    wrapper = shallow(
        <AddExpensePage 
        addedExpense={addedExpense} 
        history={history} 
    />);
});
test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addedExpense).toHaveBeenLastCalledWith(expenses[1]);
});
