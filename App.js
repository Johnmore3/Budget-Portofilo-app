import React from "react";
import ReactDOM from "react-dom";
import reactstap from 'reactstrap';
import ExpenseTable from "./components/ExpenseTable";
import SavingsTable from "./components/SavingsTable";
import BudgetTable from "./Components/BudgetTable";



function App() {
  return (
  <div className="App">
   <div className="container">
            <div className="row">
                <div className="col-md m-4">
                    <ExpenseTable />
                </div>
                <div className="col-md m-4">
                    <SavingsTable />
                </div>
                <div className="col-md m-4">
                    <BudgetTable />
                </div>
            </div>
        </div>
  </div>
  ); 
}
 export default App;
