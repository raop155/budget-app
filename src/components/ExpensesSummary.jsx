import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
  const { expenses } = props;
  let { expensesTotal } = props;
  expensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <p>
      Viewing {expenses.length} expense{expenses.length > 1 && 's'} totalling {expensesTotal}
    </p>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
    expensesTotal: selectExpensesTotal(state.expenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
