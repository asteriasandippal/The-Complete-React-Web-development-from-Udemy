import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';

const HomePage = () => (
    <div>
        <ExpenseListFilter />
        <ExpenseList/>
    </div>
);

export default HomePage;
