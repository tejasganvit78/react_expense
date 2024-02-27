import React, { useState } from "react";

const ExpenseList = ({ expenses, deleteExpense, editExpense }) => {
  const [editMode, setEditMode] = useState(null);
  const [editedProduct, setEditedProduct] = useState("");
  const [editedPrice, setEditedPrice] = useState("");
  const [editedId, setEditedId] = useState("");

  const handleEdit = (id, product, price, expenseId) => {
    setEditMode(id);
    setEditedProduct(product);
    setEditedPrice(price);
    setEditedId(expenseId);
  };

  const handleSaveEdit = (id) => {
    editExpense(id, {
      product: editedProduct,
      price: parseFloat(editedPrice),
      id: parseInt(editedId),
    });
    setEditMode(null);
    setEditedProduct("");
    setEditedPrice("");
    setEditedId("");
  };

  const handleCancelEdit = () => {
    setEditMode(null);
    setEditedProduct("");
    setEditedPrice("");
    setEditedId("");
  };

  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {editMode === expense.id ? (
              <>
                <input
                  type="text"
                  value={editedProduct}
                  onChange={(e) => setEditedProduct(e.target.value)}
                />
                <input
                  type="number"
                  value={editedPrice}
                  onChange={(e) => setEditedPrice(e.target.value)}
                />
                <input
                  type="number"
                  value={editedId}
                  onChange={(e) => setEditedId(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(expense.id)}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                Product: {expense.product}, Price: ${expense.price}, ID:{" "}
                {expense.id}
                <button
                  onClick={() =>
                    handleEdit(
                      expense.id,
                      expense.product,
                      expense.price,
                      expense.id
                    )
                  }
                >
                  Edit
                </button>
                <button onClick={() => deleteExpense(expense.id)}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
