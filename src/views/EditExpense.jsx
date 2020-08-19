import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export const EditExpense = (props) => {
  const onSubmit = (expense) => {
    props.startEditExpense({ id: props.expense.id }, expense);
    props.history.push('/');
  };

  const handleRemoveExpense = () => {
    props.startRemoveExpense({ id: props.expense.id });
    props.history.push('/');
  };

  return (
    <div>
      <h1>Edit Expense</h1>
      <ExpenseForm expense={props.expense} onSubmit={onSubmit} />
      <button onClick={handleRemoveExpense}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id),
  };
};

const mapDispatchToProps = {
  startEditExpense: ({ id }, expense) => startEditExpense({ id }, expense),
  startRemoveExpense: ({ id }) => startRemoveExpense({ id }),
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
