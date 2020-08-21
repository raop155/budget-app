import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/components/App.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import Login from './views/Login';
import Dashboard from './views/Dashboard';
import AddExpense from './views/AddExpense';
import EditExpense from './views/EditExpense';
import Help from './views/Help';
import NotFound from './views/NotFound';

import useGoogleAuth from './firebase/hooks/useGoogleAuth';

import PublicRoute from './routers/PublicRouter';
import PrivateRoute from './routers/PrivateRouter';

export const App = () => {
  const isLogin = useGoogleAuth();
  console.log('isLogin', isLogin);

  return (
    <Router>
      <Switch>
        <PublicRoute path='/' component={Login} exact />
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <PrivateRoute path='/create' component={AddExpense} />
        <PrivateRoute path='/edit/:id' component={EditExpense} />
        <Route path='/help' component={Help} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
