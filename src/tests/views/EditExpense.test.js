import React from 'react';
import { shallow } from 'enzyme';
import { EditExpense } from '../../views/EditExpense';
import expenses from '../fixtures/expenses';

let editExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpense
      expense={expenses[1]}
      history={history}
      editExpense={editExpense}
      startRemoveExpense={startRemoveExpense}
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

  it('handle startRemoveExpense', () => {
    wrapper.find('button').prop('onClick')();
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[1].id });
  });
});
