import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
  const state = expensesReducer(undefined, {
    type: '@@INIT',
  });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '999',
    description: 'Its a description',
    amount: 100,
    note: 'Its a note',
    createAt: moment(0),
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const updates = {
    description: 'Its a update description',
    amount: 122000,
    note: 'Its a update note',
    createAt: moment(0).add(1, 'days'),
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates,
  };
  const state = expensesReducer(expenses, action);
  expect(state[1]).toEqual({ id: expenses[1].id, ...updates });
});

test('should not edit an expense if expense not found', () => {
  const updates = {
    description: 'Its a update description',
    amount: 122000,
    note: 'Its a update note',
    createAt: moment(0).add(1, 'days'),
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
