import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export const ExpenseForm = (props) => {
  const [description, setDescription] = useState(props.expense ? props.expense.description : '');
  const [amount, setAmount] = useState(props.expense ? (props.expense.amount / 100).toString() : 0);
  const [createAt, setCreateAt] = useState(
    props.expense ? moment(props.expense.createAt) : moment(),
  );
  const [note, setNote] = useState(props.expense ? props.expense.note : '');

  const [error, setError] = useState({});
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    console.log('useEffect');
  }, []);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    if (name === 'description') {
      setDescription(value);
    } else if (name === 'amount') {
      if (!value || /^\d{1,}(\.\d{0,2})?$/.test(value)) setAmount(value);
    } else if (name === 'note') {
      setNote(value);
    }
  };

  const onDateChange = (createAt) => {
    if (createAt) setCreateAt(createAt);
  };

  const onFocusChange = ({ focused }) => {
    setFocused(focused);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!description || !amount) {
      setError({
        form: 'Please provide description and amount.',
      });
    } else {
      setError({
        form: '',
      });

      props.onSubmit({
        description,
        amount: parseFloat(amount, 10) * 100,
        createAt: createAt.valueOf(),
        note,
      });
    }
  };

  return (
    <div>
      {error.form && <p>{error.form}</p>}
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='description'
          placeholder='Description'
          autoFocus
          value={description}
          onChange={onChangeHandler}
        />
        <input
          type='text'
          name='amount'
          placeholder='Amount'
          value={amount}
          onChange={onChangeHandler}
        />
        <SingleDatePicker
          date={createAt}
          onDateChange={onDateChange}
          focused={focused}
          onFocusChange={onFocusChange}
          id='expense-form-dp'
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          name='note'
          placeholder='Add a note for your expense (optional)'
          value={note}
          onChange={onChangeHandler}
        ></textarea>
        <button> {props.expense ? 'Edit' : 'Add'} Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
