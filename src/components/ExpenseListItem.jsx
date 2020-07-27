import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ id, description, amount, createAt, dispatch }) => {
  return (
    <div>
      <h3 style={{ width: '50%' }}>{description}</h3>
      <p>
        amount: {amount} - createAt: {createAt}
      </p>
      <button onClick={() => dispatch(removeExpense({ id }))}>Remove</button>
    </div>
  );
};

export default connect()(ExpenseListItem);
