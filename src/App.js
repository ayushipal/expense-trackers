import React, { useState, useEffect } from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';
import AddExpenseModal from './components/AddExpenseModal';
import AddIncomeModal from './components/AddIncomeModal';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import ExpenseTrends from './components/ExpenseTrends';
import ExpenseAnalysis from './components/ExpenseAnalysis';
import './App.css';

const App = () => {
  const [walletBalance, setWalletBalance] = useState(5000);
  const [expenses, setExpenses] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const storedBalance = localStorage.getItem('walletBalance');
    const storedExpenses = localStorage.getItem('expenses');
    if (storedBalance) setWalletBalance(Number(storedBalance));
    if (storedExpenses) setExpenses(JSON.parse(storedExpenses));
  }, []);

  useEffect(() => {
    localStorage.setItem('walletBalance', walletBalance);
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [walletBalance, expenses]);

  const addExpense = (expense) => {
    if (walletBalance >= expense.amount) {
      setExpenses([...expenses, expense]);
      setWalletBalance(walletBalance - expense.amount);
    } else {
      enqueueSnackbar("Insufficient wallet balance!", { variant: 'error' });
    }
  };

  const addIncome = (amount) => {
    setWalletBalance(walletBalance + amount);
  };

  const editExpense = (id, updatedExpense) => {
    setExpenses(expenses.map(expense => (expense.id === id ? updatedExpense : expense)));
  };

  const deleteExpense = (id) => {
    const expenseToDelete = expenses.find(expense => expense.id === id);
    setExpenses(expenses.filter(expense => expense.id !== id));
    setWalletBalance(walletBalance + expenseToDelete.amount);
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <h2>Wallet Balance: ${walletBalance}</h2>
      <AddExpenseModal addExpense={addExpense} />
      <AddIncomeModal addIncome={addIncome} />
      <ExpenseList expenses={expenses} editExpense={editExpense} deleteExpense={deleteExpense} />
      <ExpenseSummary expenses={expenses} />
      <ExpenseTrends expenses={expenses} />
    </div>
  );
};

// Assign the component to a variable before exporting
const AppWithSnackbar = () => (
  <SnackbarProvider maxSnack={3}>
    <App />
  </SnackbarProvider>
);

//export default AppWithSnackbar;
export default App;