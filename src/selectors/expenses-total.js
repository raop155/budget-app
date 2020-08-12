const selectExpensesTotal = (expenses) => {
  return expenses.reduce((total, { amount }) => total + amount, 0);
};

export default selectExpensesTotal;
