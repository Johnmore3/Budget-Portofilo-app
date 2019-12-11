import React, { useState } from "react";

const _defaultEarnings = [
  {
    name: "Main Job paycheck",
    earnings: 4440
  },
  {
    name: "Side Job/Gig earnings",
    earnings: 200
  }
];

const EarningsTable = () => {
  const [earnings, setEarnings] = useState(_defaultEarnings);

  const handleEarningsChange = event => {
    const _tempEarnings = [...earnings];
    _tempEarnings[event.target.dataset.id][event.target.name] = event.target.value;

    setEarnings(_tempEarnings);
  };

  const addNewEarnings = () => {
    setEarnings(prevEarnings => [...prevEarnings, { name: "", price: 0 }]);
  };

  const getTotalEarnings = () => {
    return earnings.reduce((total, item) => {
      return total + Number(item.price);
    }, 0);
  };

  return (
    <div className="table">
      <div className="table-content">
        <div className="table-header">
          <div className="table-row">
            <div className="table-data">
              <div>Earnings</div>
            </div>
            <div className="table-data">
              
            </div>
          </div>
        </div>
        <div className="table-body">
          {earnings.map((item, index) => (
            <div className="table-row" key={index}>
              <div className="table-data">
                <input
                  name="name"
                  data-id={index}
                  type="text"
                  value={item.name}
                  onChange={handleEarningsChange}
                />
              </div>
              <div className="table-data">
                <input
                  name="price"
                  data-id={index}
                  type="number"
                  value={item.price}
                  onChange={handleEarningsChange}
                />
              </div>
            </div>
          ))}
          <div className="table-row">
            <div className="table-data">
              <button onClick={addNewEarnings}>+</button>
            </div>
          </div>
        </div>
        <div className="table-footer">
          <div className="table-row">
            <div className="table-data">
              <div>Full Earnings:</div>
            </div>
            <div className="table-data">
              <div>{getTotalEarnings()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningsTable;