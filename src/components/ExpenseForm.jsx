import React, { useState, useEffect } from 'react';
import moment from "moment"
import "react-dates/lib/css/_datepicker.css"
import { SingleDatePicker } from "react-dates"

const now = moment();
console.log(now.format("MMM Do, YYYY"));

const ExpenseForm = props => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [createAt, setCreateAt] = useState(moment())
  const [focused, setFocused] = useState(false)
  const [note, setNote] = useState('');
  const [error, setError] = useState({})

  useEffect(() => {
    console.log('useEffect');
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    if (name === 'description') {
      setDescription(value);
    } else if (name === 'amount') {
      if (!value || /^\d{1,}(.\d{0,2})?$/.test(value)) setAmount(value);
    } else if (name === 'note') {
      setNote(value);
    }
  };

  const onDateChange = (createAt) => {
    if (createAt) setCreateAt(createAt)
  }

  const onFocusChange = ({ focused }) => {
    setFocused(focused);
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (!description || !amount) {
      setError({
        form: "Please provide description and amount."
      })
    } else {
      setError({
        form: ""
      })

      props.onSubmit({
        description,
        amount: parseFloat(amount, 10) * 100,
        createAt: createAt.valueOf(),
        note
      })

    }
  }

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
          id="date-picker"
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          name='note'
          placeholder='Add a note for your expense (optional)'
          value={note}
          onChange={onChangeHandler}
        ></textarea>
        <button>Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
