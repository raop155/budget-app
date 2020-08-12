import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
  const { expenseCount } = props;
  let { expensesTotal } = props;
  const expenseWord = expenseCount > 1 ? 'expenses' : 'expense';
  expensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <h1>
      Viewing {expenseCount} {expenseWord} totalling {expensesTotal}
    </h1>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
