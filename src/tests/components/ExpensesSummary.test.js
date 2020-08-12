import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

describe('<ExpensesSummary /> should', () => {
  it('render correctly', () => {
    const wrapper = shallow(
      <ExpensesSummary expenses={expenses} expensesTotal={expenses.length} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
