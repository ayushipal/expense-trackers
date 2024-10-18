import React, { useState } from 'react';
import Modal from 'react-modal';

const AddIncomeModal = ({ addIncome }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome(Number(amount));
    setModalIsOpen(false);
    setAmount('');
  };

  return (
    <>
      <button onClick={() => setModalIsOpen(true)}>Add Income</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>Add Income</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="number" 
            placeholder="Amount" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            required 
          />
          {/* Buttons placed below the input field */}
          <div style={{ marginTop: '10px' }}>
            <button type="submit">Add Income</button>
            <button type="button" onClick={() => setModalIsOpen(false)}>Cancel</button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddIncomeModal;