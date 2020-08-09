import React from 'react';
import { addExpense } from '../actions/expenses';
import { connect } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';

const AddExpense = props => {
  const onSubmit = expense => {
    props.onSubmit(expense);
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
    onSubmit: expense => dispatch(addExpense(expense)),
  };
};

export default connect(undefined, mapDispatchToProps)(AddExpense);
