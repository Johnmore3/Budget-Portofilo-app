import React, { useState } from "react";

const _defaultExpenses = [
  {
    name: "Rent",
    price: 1440
  },
  {
    name: "Car Payment",
    price: 200
  }
];

const ExpenseTable = () => {
  const [expenses, setExpenses] = useState(_defaultExpenses);

  const handleExpenseChange = event => {
    const _tempExpenses = [...expenses];
    _tempExpenses[event.target.dataset.id][event.target.name] = event.target.value;

    setExpenses(_tempExpenses);
  };

  const addNewExpenses = () => {
    setExpenses(prevExpenses => [...prevExpenses, { name: "", price: 0 }]);
  };

  const getTotalExpenses = () => {
    return expenses.reduce((total, item) => {
      return total + Number(item.price);
    }, 0);
  };

  return (
    <div className="table">
      <div className="table-content">
        <div className="table-header">
          <div className="table-row">
            <div className="table-data">
              <div>Expenses</div>
            </div>
            <div className="table-data">
              
            </div>
          </div>
        </div>
        <div className="table-body">
          {expenses.map((item, index) => (
            <div className="table-row" key={index}>
              <div className="table-data">
                <input
                  name="name"
                  data-id={index}
                  type="text"
                  value={item.name}
                  onChange={handleExpenseChange}
                />
              </div>
              <div className="table-data">
                <input
                  name="price"
                  data-id={index}
                  type="number"
                  value={item.price}
                  onChange={handleExpenseChange}
                />
              </div>
            </div>
          ))}
          <div className="table-row">
            <div className="table-data">
              <button onClick={addNewExpenses}>+</button>
            </div>
          </div>
        </div>
        <div className="table-footer">
          <div className="table-row">
            <div className="table-data">
              <div>Total</div>
            </div>
            <div className="table-data">
              <div>{getTotalExpenses()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTable;