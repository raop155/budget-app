import React from 'react';
import { addExpense } from '../actions/expenses';
import { connect } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';

const AddExpense = props => {
  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm
        onSubmit={expense => {
          props.dispatch(addExpense(expense));
          props.history.push('/');
        }}
      />
    </div>
  );
};

export default connect()(AddExpense);
