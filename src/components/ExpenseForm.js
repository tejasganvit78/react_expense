import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');
  const [id, setId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!product || !price || !id) {
      alert('Please fill in all fields.');
      return;
    }

    const newExpense = {
      id: new Date().getTime(),
      product,
      price: parseFloat(price),
      id: parseInt(id),
    };

    addExpense(newExpense);
    setProduct('');
    setPrice('');
    setId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Product:</label>
        <input
          type="text"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label>ID:</label>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
