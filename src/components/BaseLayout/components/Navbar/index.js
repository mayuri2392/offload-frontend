// Dependencies
import React from 'react';
import { Icon } from 'react-materialize';
import { NavLink } from 'react-router-dom';
// Internals
import './index.css';


const Navbar = () => (
  <nav className="navbar">
    <div className="nav-links">
      <ul>
        <li><NavLink activeClassName="selected" className="nav-link" exact to="/">Home</NavLink></li>
        <li><NavLink activeClassName="selected" className="nav-link" to="/women">Women</NavLink></li>
        <li><NavLink activeClassName="selected" className="nav-link" to="/men">Men</NavLink></li>
        <li><NavLink activeClassName="selected" className="nav-link" to="/users/login">Login/Register</NavLink></li>
      </ul>
    </div>
    <div className="shopping-cart">
      <NavLink activeClassName="selected" className="nav-link" to="/cart">Cart</NavLink>
    </div>
  </nav>
);

export default Navbar;
