import React from 'react';
import { startAddExpense } from '../actions/expenses';
import { connect } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';

export const AddExpense = (props) => {
  const onSubmit = (expense) => {
    props.startAddExpense(expense);
    props.history.push('/');
  };

  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm onSubmit={onSubmit} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    startAddExpense: (expense) => dispatch(startAddExpense(expense)),
  };
};

export default connect(undefined, mapDispatchToProps)(AddExpense);
