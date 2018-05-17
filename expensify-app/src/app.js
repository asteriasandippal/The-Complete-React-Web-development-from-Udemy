import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css'; 
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard
    </div>
);

const AddExpenseDashboardPage = () => (
    <div>
        This is from my Add dashboard
    </div>
);

const EditExpenseDashboardPage = () => (
    <div>
        This is from my Edited dashboard
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} exact />
            <Route path="/create" component={AddExpenseDashboardPage}/>
            <Route path="/edit" component={EditExpenseDashboardPage}/>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
