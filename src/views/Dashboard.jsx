import React from 'react';
import ExpenseListFilters from '../components/ExpenseListFilters';
import ExpenseList from '../components/ExpenseList';
import ExpensesSummary from '../components/ExpensesSummary';

export const Dashboard = () => {
  return (
    <div>
      <ExpenseListFilters />
      <ExpensesSummary />
      <ExpenseList />
    </div>
  );
};

export default Dashboard;
