import database from '../firebase/firebase';

export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const { description = '', note = '', amount = 0, createAt = 0 } = expenseData;
    const expense = {
      description,
      note,
      amount,
      createAt,
    };

    return database
      .ref('expenses')
      .push(expense)
      .then((ref) => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense,
          }),
        );
      });
  };
};

export const removeExpense = (id) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch) => {
    return database
      .ref(`expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense(id));
      })
      .catch((error) => {
        console.log('startRemoveExpense', error);
      });
  };
};

export const editExpense = ({ id }, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});

export const startEditExpense = ({ id }, updates) => {
  return (dispatch) => {
    return database
      .ref(`expenses/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editExpense({ id }, updates));
      })
      .catch((error) => {
        console.log('startEditExpense', error);
      });
  };
};

export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses,
});

export const startSetExpenses = () => {
  return (dispatch) => {
    return database
      .ref('expenses')
      .once('value')
      .then((snapshot) => {
        const expenses = [];
        snapshot.forEach((childsnapshot) => {
          expenses.push({
            id: childsnapshot.key,
            ...childsnapshot.val(),
          });
        });

        dispatch(setExpenses(expenses));
      });
  };
};
