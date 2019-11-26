import React, {Component} from "react";


 class ExpensesList extends React.Component {
  state = {
    expensesNames: "",
    amount: [],
    frequency: "",
    
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
        expensesNames: "",
        amount: [],
        frequency: "",
    });
    this.props.onChange({
        expensesNames: "",
        amount: [],
        frequency: "",
    });
  };

  render() {
    return (
      <form>
        <input
          name="expenseName"
          placeholder="Expense name"
          value={this.state.expensesNames}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="amount"
          placeholder="Amount:"
          value={this.state.amount}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="frequency"
          placeholder="Frequency"
          value={this.state.frequency}
          onChange={e => this.change(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}
export default ExpensesList