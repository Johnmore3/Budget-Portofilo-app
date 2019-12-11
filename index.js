import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import SavingsTable from './Components/SavingsTable';
import ExpenseTable from './Components/ExpenseTable';
import BudgetTable from "./Components/BudgetTable";


function App() {
  return (
    <div className="App">
      <h1>Savings </h1>
      <SavingsTable />
      <h2>Expenses</h2>
      <ExpenseTable />
      <h2>Budget</h2>
      <BudgetTable />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

