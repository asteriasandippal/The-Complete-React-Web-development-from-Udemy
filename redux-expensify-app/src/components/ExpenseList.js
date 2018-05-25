import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import getVisibleExpense from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        <h2>Expense List</h2>
        {/* {props.filters.text} */}
        {props.expenses.length === 0 ? (
            <p>No Expense Here..</p>
        ) : (
            props.expenses.map(expense => 
                <ExpenseListItem key={expense.id} {...expense}/>
            )
        )}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpense(state.expenses, state.filters),
    }
};

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;
