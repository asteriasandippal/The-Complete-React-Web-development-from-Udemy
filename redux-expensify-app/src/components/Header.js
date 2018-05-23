import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Portfolio</h1>
        <NavLink exact to="/" activeClassName="is-active">DashBoard</NavLink>
        <NavLink exact to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
    </header>
);

export default Header;
