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

export const ExpenseListFilters = (props) => {
  const [focused, setFocused] = useState(null);

  const handleDatesChange = ({ startDate, endDate }) => {
    props.setStartDate(startDate);
    props.setEndDate(endDate);
  };

  const handleFocusChange = (focused) => {
    setFocused(focused);
  };

  const handleChangeTextFilter = (e) => {
    props.setTextFilter(e.target.value);
  };

  const handleChangeSelectFilter = (e) => {
    if (e.target.value === 'date') {
      props.sortByDate();
    } else if (e.target.value === 'amount') {
      props.sortByAmount();
    }
  };

  return (
    <>
      <input type='text' value={props.filters.text} onChange={handleChangeTextFilter} />
      <select value={props.filters.sortBy} onChange={handleChangeSelectFilter}>
        <option value='date'>Date</option>
        <option value='amount'>Amount</option>
      </select>

      <DateRangePicker
        startDate={props.filters.startDate}
        endDate={props.filters.endDate}
        onDatesChange={handleDatesChange}
        focusedInput={focused}
        onFocusChange={handleFocusChange}
        startDateId='expense-list-filters-dp-start'
        endDateId='expense-list-filters-dp-end'
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={() => false}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

const mapDisptachToProps = (dispatch) => {
  return {
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (date) => dispatch(setStartDate(date)),
    setEndDate: (date) => dispatch(setEndDate(date)),
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(ExpenseListFilters);
