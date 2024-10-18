// src/components/ExpenseList.js
import React from 'react';

const ExpenseList = ({ expenses, editExpense, deleteExpense }) => {
  return (
    <ul>
      {expenses.map(expense => (
        <li key={expense.id}>
          <span>{expense.title }</span>
          <span>{expense.amount}</span>
          <span>{expense.category}</span>
          <span>{expense.date}</span>
          <button onClick={() => editExpense(expense)}>Edit</button>
          <button onClick={() => deleteExpense(expense.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList; // Correct export