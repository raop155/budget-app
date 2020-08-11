import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let wrapper;
let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />,
  );
});

describe('<ExpenseListFilters /> should', () => {
  it('render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('render correctly with alt filters', () => {
    wrapper.setProps({
      filters: altFilters,
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('handle text change', () => {
    const value = 'filterTest';
    wrapper.find('input').simulate('change', {
      target: {
        value,
      },
    });

    expect(setTextFilter).toHaveBeenLastCalledWith(value);
  });

  it('sort by date', () => {
    const value = 'date';
    wrapper.find('select').simulate('change', {
      target: {
        value,
      },
    });

    expect(sortByDate).toHaveBeenCalled();
  });

  it('sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
      target: {
        value,
      },
    });

    expect(sortByAmount).toHaveBeenCalled();
  });

  it('handle date changes', () => {
    wrapper
      .find('withStyles(DateRangePicker)')
      .props()
      .onDatesChange({ startDate: altFilters.startDate, endDate: altFilters.endDate });

    expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate);
  });

  it('handle date focus changes', () => {
    const focused = 'endDate';
    wrapper
      .find('withStyles(DateRangePicker)')
      .props()
      .onFocusChange(focused);

    expect(wrapper.find('withStyles(DateRangePicker)').props().focusedInput).toBe(focused);
  });
});
