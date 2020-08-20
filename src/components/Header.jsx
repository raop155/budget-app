import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => {
  return (
    <header>
      <h1>Heroku Budget App - Continuous Delivery</h1>
      <nav>
        <NavLink to='/dashboard' activeClassName='is-active' exact>
          Dashboard
        </NavLink>
        <NavLink to='/create' activeClassName='is-active'>
          Create Expense
        </NavLink>
        <NavLink to='/help' activeClassName='is-active'>
          Help
        </NavLink>
      </nav>
      <button onClick={startLogout}>Logout</button>
    </header>
  );
};

const mapDispatchToProps = {
  startLogout: () => startLogout(),
};

export default connect(null, mapDispatchToProps)(Header);
