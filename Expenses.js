import React, { Component } from 'react';


class expensesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expenses: []
        };

        this.addExpenses = this.addExpenses.bind(this);


    }
    addExpenses(e)  {
        if (this.inputElement.value !== "") {
            let newExpenselist = {
                text: this.inputElement.value,
            };  
        }

    }

    render() {
        return (
            <div className="expenseList">
                <form onSubmit={this.addExpenses}>
                    <label>Expenses:</label>
                    <input  ref={(a)=> this.inputElement = a}
                        placeholder="Enter expenses"
                        className="form-control"
                        
                    />
                    <button className="btn btn-dark btn-block mt-3">Submit</button>
                </form>
            </div>

        )
    }
}

export default ExpensesList