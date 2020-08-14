import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/components/App.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

import Header from './components/Header';
import Dashboard from './views/Dashboard';
import AddExpense from './views/AddExpense';
import EditExpense from './views/EditExpense';
import Help from './views/Help';
import NotFound from './views/NotFound';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' component={Dashboard} exact />
        <Route path='/create' component={AddExpense} />
        <Route path='/edit/:id' component={EditExpense} />
        <Route path='/help' component={Help} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
