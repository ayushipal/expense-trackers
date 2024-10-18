import React from 'react';
import ExpenseSummary from './ExpenseSummary';
import ExpenseTrends from './ExpenseTrends';
import './ExpenseAnalysis.css'; // Import the CSS for styling

const ExpenseAnalysis = ({ expenses }) => {
  return (
    <div className="expense-analysis">
      <div className="expense-summary">
        <h2>Expense Summary</h2>
        <ExpenseSummary expenses={expenses} />
      </div>
      <div className="expense-trends">
        <h2>Expense Trends</h2>
        <ExpenseTrends expenses={expenses} />
      </div>
    </div>
  );
};

export default ExpenseAnalysis;