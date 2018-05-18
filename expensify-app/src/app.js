import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink  } from 'react-router-dom';
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
        404! <Link to="/">Go to Home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink exact to="/" activeClassName="is-active">Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact />
                <Route path="/create" component={AddExpenseDashboardPage}/>
                <Route path="/edit" component={EditExpenseDashboardPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
