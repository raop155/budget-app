import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({ id, description, amount, createAt }) => {
  return (
    <div className='content-container'>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>
        amount: {numeral(amount / 100).format('$0,0.00')} - createAt:{' '}
        {moment(createAt).format('MMMM Do, YYYY')}
      </p>
    </div>
  );
};

export default ExpenseListItem;
