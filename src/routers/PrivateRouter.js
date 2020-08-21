import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRouter = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuth ? (
          <>
            <Header />
            <Component {...props} />
          </>
        ) : (
          <Redirect to='/' />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  isAuth: !!state.auth.uid,
});

export default connect(mapStateToProps)(PrivateRouter);
