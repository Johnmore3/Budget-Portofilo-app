import React from "react";

class SavingsList extends React.Component {
  state = {
    name: "",
    amount: ""
  };

  handleOnChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => this.updateSavingList()
    );
  };

  updateSavingList = () => {
    const updatedSavings = {
      name: this.state.name,
      Amount: parseInt(this.state.savings || 0)
    };

    this.props.updateSavingList(this.props.index, updatedSavings);
  };

  render() {
    const { name, amount} = this.state;
    return (
      <div>
        <label>Name:</label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={this.handleOnChange}
        />
        <label>Amount:</label>
        <input
          name="amount"
          type="number"
          value={amount}
          onChange={this.handleOnChange}
        />
      </div>
    );
  }
}

export default SavingsList;
