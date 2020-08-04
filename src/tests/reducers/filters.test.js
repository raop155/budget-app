import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filters values', () => {
  const state = filtersReducer(undefined, {
    type: '@@INIT',
  });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, {
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount',
  });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const testState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  };

  const state = filtersReducer(testState, {
    type: 'SORT_BY_DATE',
    sortBy: 'date',
  });
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_TEXT_FILTER',
    text: 'abc',
  });
  expect(state.text).toBe('abc');
});

test('should set startDate filter', () => {
  const startDate = moment();
  const state = filtersReducer(undefined, {
    type: 'SET_START_DATE',
    startDate,
  });
  expect(state.startDate).toEqual(startDate);
});

test('should set endDate filter', () => {
  const endDate = moment();
  const state = filtersReducer(undefined, {
    type: 'SET_END_DATE',
    endDate,
  });
  expect(state.endDate).toEqual(endDate);
});
