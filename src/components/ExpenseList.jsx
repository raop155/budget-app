import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { startSetExpenses } from '../actions/expenses';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => {
  const { startSetExpenses, expenses } = props;

  useEffect(() => {
    console.log('useEffect from ExpenseList');
    startSetExpenses();
  }, [startSetExpenses]);

  useEffect(() => {
    // console.log('expenses', expenses);
  }, [expenses]);

  return (
    <>
      {props.expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
        props.expenses.map((expense) => {
          return <ExpenseListItem key={expense.id} {...expense} />;
        })
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startSetExpenses: () => dispatch(startSetExpenses()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);
