import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRouter = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) => (isAuth ? <Redirect to='/dashboard' /> : <Component {...props} />)}
    />
  );
};

const mapStateToProps = (state) => ({
  isAuth: !!state.auth.uid,
});

export default connect(mapStateToProps)(PublicRouter);
