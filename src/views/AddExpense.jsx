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
      <div className='page-header'>
        <div className='content-container'>
          <h1 className='page-header__title'>Add Expense</h1>
        </div>
      </div>
      <div className='content-container'>
        <ExpenseForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    startAddExpense: (expense) => dispatch(startAddExpense(expense)),
  };
};

export default connect(undefined, mapDispatchToProps)(AddExpense);
