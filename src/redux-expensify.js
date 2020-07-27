import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = ({ description = '', note = '', amount = 0, createAt = 0 } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createAt,
  },
});

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

const editExpense = ({ id }, { updates }) => ({
  type: 'EDIT_EXPENSE',
  id,
  expense,
});

const espensesReducerDefaultState = [];
const expensesReducer = (state = espensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPSE':
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
});

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
  sortBy: 'amount',
});

const sortByDate = () => ({
  type: 'SORT_BY_DATE',
  sortBy: 'date',
});

const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate,
});

const endStartDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate,
});

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date', // date or amount
  startDate: undefined,
  endDate: undefined,
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text,
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: action.sortBy,
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: action.sortBy,
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate,
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate,
      };

    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  }),
);

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
      const endDateMatch = typeof startDate !== 'number' || expense.createAt <= endDate;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createAt < b.createAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

const demoState = {
  expenses: [
    {
      id: 'asdasdsad',
      description: 'asdasd',
      note: 'This was a final payment for that address',
      amount: 54500,
      createAt: 0,
    },
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined,
  },
};
