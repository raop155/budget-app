import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => {
  return (
    <header className='header'>
      <div className='content-container'>
        <div className='header__content'>
          <nav>
            <Link className='header__title' to='/dashboard'>
              <h1>Expensify</h1>
            </Link>
          </nav>
          <button className='button button--link' onClick={startLogout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

const mapDispatchToProps = {
  startLogout: () => startLogout(),
};

export default connect(null, mapDispatchToProps)(Header);
