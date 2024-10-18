// src/components/EditExpenseModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import { useSnackbar } from 'notistack';

const EditExpenseModal = ({ expense, onClose, editExpense }) => {
  const [title, setTitle] = useState(expense.title);
  const [amount, setAmount] = useState(expense.amount);
  const [category, setCategory] = useState(expense.category);
  const [date, setDate] = useState(expense.date);
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !category || !date) {
      enqueueSnackbar("All fields are required!", { variant: 'error' });
      return;
    }
    editExpense(expense.id, { id: expense.id, title, amount: Number(amount), category, date });
    onClose();
  };

  return (
    <Modal isOpen={true} onRequestClose={onClose}>
      <h2>Edit Expense</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Amount:
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
        <br />
        <label>
          Category:
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </label>
        <br />
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <br />
        <button type="submit">Save Changes</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </Modal>
  );
};

export default EditExpenseModal;