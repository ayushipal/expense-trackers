import React, { useState } from 'react'; // Import useState from React
import EditExpenseModal from './EditExpenseModal'; // Import the new EditExpenseModal component
import './ExpenseList.css'; // Import the CSS file


const ExpenseList = ({ expenses, editExpense, deleteExpense }) => {
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleEditClick = (expense) => {
    setSelectedExpense(expense);
    setEditModalOpen(true);
  };

  return (
    <div>
      <ul className="expense-list">
        {expenses.map(expense => (
          <li key={expense.id}>
            <span>{expense.title}</span>
            <span>{expense.amount}</span>
            <span>{expense.category}</span>
            <span>{expense.date}</span>
            <button onClick={() => handleEditClick(expense)}>Edit</button>
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {isEditModalOpen && (
        <EditExpenseModal
          expense={selectedExpense}
          onClose={() => setEditModalOpen(false)}
          editExpense={editExpense}
        />
      )}
    </div>
  );
};

export default ExpenseList;