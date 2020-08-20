import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './styles/components/App.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import Header from './components/Header';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import AddExpense from './views/AddExpense';
import EditExpense from './views/EditExpense';
import Help from './views/Help';
import NotFound from './views/NotFound';

import useGoogleAuth from './firebase/hooks/useGoogleAuth';

function App() {
  const isLogin = useGoogleAuth();
  console.log('isLogin', isLogin);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact>
          {isLogin ? <Redirect to='/dashboard' /> : <Login />}
        </Route>
        <Route path='/dashboard'>{isLogin ? <Dashboard /> : <Redirect to='/' />}</Route>
        <Route path='/create'>{isLogin ? <AddExpense /> : <Redirect to='/' />}</Route>
        <Route path='/edit/:id'>{isLogin ? <EditExpense /> : <Redirect to='/' />}</Route>
        <Route path='/help'>{isLogin ? <Help /> : <Redirect to='/' />}</Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
