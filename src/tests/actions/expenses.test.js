import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup add expense action object with parameters', () => {
  const data = {
    description: '',
    amount: 9999,
    createAt: 1000,
    note: 'This is a note!',
  };

  const action = addExpense(data);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...data,
    },
  });
});

test('should setup add expense action object with default', () => {
  const data = {
    description: '',
    note: '',
    amount: 0,
    createAt: 0,
  };

  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...data,
    },
  });
});

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc',
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense({ id: '123abc' }, { note: 'note123' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'note123',
    },
  });
});
