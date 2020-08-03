import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from '../actions/filters';
import { DateRangePicker } from 'react-dates';

const ExpenseListFilters = props => {
  const [focused, setFocused] = useState(null);

  const onDatesChange = ({ startDate, endDate }) => {
    props.dispatch(setStartDate(startDate));
    props.dispatch(setEndDate(endDate));
  };

  const onFocusChange = focused => {
    setFocused(focused);
  };

  return (
    <>
      <input
        type='text'
        value={props.filters.text}
        onChange={e => {
          props.dispatch(setTextFilter(e.target.value));
        }}
      />
      <select
        value={props.filters.sortBy}
        onChange={e => {
          if (e.target.value === 'date') {
            props.dispatch(sortByDate());
          } else if (e.target.value === 'amount') {
            props.dispatch(sortByAmount());
          }
        }}
      >
        <option value='date'>Date</option>
        <option value='amount'>Amount</option>
      </select>

      <DateRangePicker
        startDate={props.filters.startDate}
        endDate={props.filters.endDate}
        onDatesChange={onDatesChange}
        focusedInput={focused}
        onFocusChange={onFocusChange}
        startDateId='expense-list-filters-dp-start'
        endDateId='expense-list-filters-dp-end'
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={() => false}
      />
    </>
  );
};

const mapStateToProps = state => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
