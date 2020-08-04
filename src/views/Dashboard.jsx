import React from 'react';
import ExpenseListFilters from '../components/ExpenseListFilters';
import ExpenseList from '../components/ExpenseList';

export const Dashboard = () => {
  return (
    <div>
      <ExpenseListFilters />
      <ExpenseList />
    </div>
  );
};

export default Dashboard;
