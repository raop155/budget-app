import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

describe('expenses-total should', () => {
  it('return 0 if no expenses', () => {
    const result = selectExpensesTotal([]);
    expect(result).toBe(0);
  });

  it('add up a single expense', () => {
    const result = selectExpensesTotal([expenses[0]]);
    expect(result).toBe(195);
  });

  it('add up a multiple expense', () => {
    const result = selectExpensesTotal(expenses);
    expect(result).toBe(114195);
  });
});
