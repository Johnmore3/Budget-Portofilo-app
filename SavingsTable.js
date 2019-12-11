import React, { useState } from "react";

const _defaultSavings = [
  {
    name: "Stocks",
    savings: 1400
  },
  {
    name: "Cash Savings",
    savings: 2000
  },
  
];

const SavingsTable = () => {
  const [savings, setSavings] = useState(_defaultSavings);

  const handleSavingChange = event => {
    const _tempSavings = [...savings];
    _tempSavings[event.target.dataset.id][event.target.name] = event.target.value;

    setSavings(_tempSavings);
  };

  const addNewSavings = () => {
    setSavings(prevSavings=> [...prevSavings, { name: "", savings: 0 }]);
  };

  const getTotalSavings = () => {
    return savings.reduce((total, item) => {
      return total + Number(item.savings);
    }, 0);
  };

  return (
    <div className="table">
      <div className="table-content">
        <div className="table-header">
          <div className="table-row">
            <div className="table-data">
              <div>Savings</div>
            </div>
            <div className="table-data">
              
            </div>
          </div>
        </div>
        <div className="table-body">
          {savings.map((item, index) => (
            <div className="table-row" key={index}>
              <div className="table-data">
                <input
                  name="name"
                  data-id={index}
                  type="text"
                  value={item.name}
                  onChange={handleSavingChange}
                />
              </div>
              <div className="table-data">
                <input
                  name="savings"
                  data-id={index}
                  type="number"
                  value={item.savings}
                  onChange={handleSavingChange}
                />
              </div>
            </div>
          ))}
          <div className="table-row">
            <div className="table-data">
              <button onClick={addNewSavings}>+</button>
            </div>
          </div>
        </div>
        <div className="table-footer">
          <div className="table-row">
            <div className="table-data">
              <div>Total</div>
            </div>
            <div className="table-data">
              <div>{getTotalSavings()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsTable;