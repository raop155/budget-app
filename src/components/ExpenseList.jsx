import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { startSetExpenses } from '../actions/expenses';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => {
  const { startSetExpenses, expenses } = props;

  useEffect(() => {
    console.log('useEffect ExpenseList');
    startSetExpenses();
  }, [startSetExpenses]);

  return (
    <div className='content-container'>
      <div className='list-header'>
        <div>Expense</div>
        <div className='show-desktop'>Amount</div>
      </div>
      <div className='list-body'>
        {expenses.length === 0 ? (
          <div className='list-item list-item--message'>
            <span>No expenses</span>
          </div>
        ) : (
          expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />;
          })
        )}
      </div>
    </div>
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
