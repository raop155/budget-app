import moment from 'moment';

const selectExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const createAt = moment(expense.createAt);
      const startDateMatch = startDate ? startDate.isSameOrBefore(createAt, 'day') : true;
      const endDateMatch = endDate ? endDate.isSameOrAfter(createAt, 'day') : true;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createAt < b.createAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      } else {
        return 1;
      }
    });
};

export default selectExpenses;
