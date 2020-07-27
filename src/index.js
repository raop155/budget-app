import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/styles.scss';
import store from './store/store';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import selectExpenses from './selectors/expenses';

store.dispatch(addExpense({ description: 'Water bill', note: 'note', amount: 50000, createAt: 0 }));
store.dispatch(addExpense({ description: 'Gas bill', note: 'note', amount: 20000, createAt: 150 }));
store.dispatch(setTextFilter('water'));

setTimeout(() => {
  store.dispatch(setTextFilter('rent'));
}, 3000);

const state = store.getState();

const expenses = selectExpenses(state.expenses, state.filters);

console.log(expenses);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
