import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Header from '../components/Header';
import HomePage from '../components/HomePage';
import PortfolioPage from '../components/PortfolioPage';
import ContactPage from '../components/ContactPage';
import PortfolioItemPage from '../components/PortfolioItemPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/portfolio" component={PortfolioPage} exact/>
                <Route path="/portfolio/:id" component={PortfolioItemPage}/>                
                <Route path="/contact" component={ContactPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
