import React, { useState } from "react";

const _defaultBudget = [
  {
    name: "Earnings",
    amount: 4640
  },
  {
    name: "Expenses",
    amount: 1640
  }
];

const BudgetTable = () => {
  const [amount, setBudget] = useState(_defaultBudget);

  const handleBudgetChange = event => {
    const _tempBudget = [...amount];
    _tempBudget[event.target.dataset.id][event.target.name] = event.target.value;

    setBudget(_tempBudget);
  };

  

  

  return (
    <div className="table">
      <div className="table-content">
        <div className="table-header">
          <div className="table-row">
            <div className="table-data">
              <div>Budget</div>
            </div>
            <div className="table-data">
              
            </div>
          </div>
        </div>
        <div className="table-body">
        {_defaultBudget.map((item, index) => (
            <div className="table-row" key={index}>
              <div className="table-data">
                <input
                  name="Earnings"
                  data-id={index}
                  type="number"
                  value={item.name}
                  onChange={handleBudgetChange}
                />
              </div>
              <div className="table-data">
                <input
                  name="Expenses"
                  data-id={index}
                  type="number"
                  value={item.price}
                  onChange={handleBudgetChange}
                />
              </div>
            </div>
          ))}
         
        </div>
        <div className="table-footer">
          <div className="table-row">
            <div className="table-data">
              <div>Total</div>
            </div>
            <div className="table-data">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetTable;
