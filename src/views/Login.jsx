import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const Login = ({ startLogin }) => {
  return (
    <>
      <h1>Login Page</h1>
      <button onClick={startLogin}>Login</button>
    </>
  );
};

const mapDispatchToProps = {
  startLogin: () => startLogin(),
};

export default connect(null, mapDispatchToProps)(Login);
