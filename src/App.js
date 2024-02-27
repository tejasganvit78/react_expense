import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import './App.css'

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(storedExpenses);
  }, []);

  const updateLocalStorage = (newExpenses) => {
    localStorage.setItem('expenses', JSON.stringify(newExpenses));
  };

  const addExpense = (expense) => {
    const newExpenses = [...expenses, expense];
    setExpenses(newExpenses);
    updateLocalStorage(newExpenses);
  };

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
    updateLocalStorage(updatedExpenses);
  };

  const editExpense = (id, updatedExpense) => {
    const updatedExpenses = expenses.map((expense) =>
      expense.id === id ? { ...expense, ...updatedExpense } : expense
    );
    setExpenses(updatedExpenses);
    updateLocalStorage(updatedExpenses);
  };

  const getTotalItems = () => {
    return expenses.length;
  };

  const getTotalCost = () => {
    return expenses.reduce((total, expense) => total + expense.price, 0).toFixed(2);
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList
        expenses={expenses}
        deleteExpense={deleteExpense}
        editExpense={editExpense}
      />
      <div>
        <p>Total Items: {getTotalItems()}</p>
        <p>Total Cost: ${getTotalCost()}</p>
      </div>
    </div>
  );
}

export default App;
