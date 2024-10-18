// src/components/AddExpenseModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import { useSnackbar } from 'notistack';

const AddExpenseModal = ({ addExpense }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const categories = [
    'Food',
    'Transport',
    'Entertainment',
    'Utilities',
    'Others',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !category || !date) {
      enqueueSnackbar("All fields are required!", { variant: 'error' });
      return;
    }
    addExpense({ id: Date.now(), title, amount: Number(amount), category, date });
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Add Expense</button>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <h2>Add Expense</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <label>
            Title:
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              placeholder="Enter expense title" 
              required 
            />
          </label>
          <label>
            Amount:
            <input 
              type="number" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)} 
              placeholder="Enter amount" 
              required 
            />
          </label>
          <label>
            Category:
            <select 
              value={category} 
              onChange={(e) => setCategory(e.target.value)} 
              required
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </label>
          <label>
            Date:
            <input 
              type="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
              required 
            />
          </label>
          <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '10px' }}>
            <button type="submit" style={{ marginRight: '5px' }}>Add Expense</button>
            <button type="button" onClick={() => setIsOpen(false)}>Cancel</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddExpenseModal;