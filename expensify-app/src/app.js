import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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

const NotFoundPage = () => (
    <div>
        404!
    </div>
);

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact />
            <Route path="/create" component={AddExpenseDashboardPage}/>
            <Route path="/edit" component={EditExpenseDashboardPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
