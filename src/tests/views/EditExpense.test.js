import React from 'react';
import { shallow } from 'enzyme';
import { EditExpense } from '../../views/EditExpense';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpense
      expense={expenses[1]}
      history={history}
      editExpense={editExpense}
      removeExpense={removeExpense}
    />,
  );
});

describe('<EditExpense /> should', () => {
  it('render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith({ id: expenses[1].id }, expenses[1]);
  });

  it('handle removeExpense', () => {
    wrapper.find('button').prop('onClick')();
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[1].id });
  });
});
