import React from 'react';
import ExpenseListFilters from '../components/ExpenseListFilters';
import ExpenseList from '../components/ExpenseList';

const Dashboard = () => {
  return (
    <div>
      <ExpenseListFilters />
      <ExpenseList />
    </div>
  );
};

export default Dashboard;
