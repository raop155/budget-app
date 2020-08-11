import React from 'react';
import { addExpense } from '../actions/expenses';
import { connect } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';

export const AddExpense = props => {
  const onSubmit = expense => {
    props.addExpense(expense);
    props.history.push('/');
  };

  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm onSubmit={onSubmit} />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addExpense: expense => dispatch(addExpense(expense)),
  };
};

export default connect(undefined, mapDispatchToProps)(AddExpense);
