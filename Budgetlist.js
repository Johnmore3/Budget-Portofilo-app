class BudgetList extends React.Component {
    state = {
      name: "",
      amount: ""
    };
  
    handleOnChange = e => {
      this.setState(
        {
          [e.target.name]: e.target.value
        },
        () => this.updateBudgetList()
      );
    };
  
    updateBudgetList = () => {
      const updatedBudget = {
        name: this.state.name,
        amount: parseInt(this.state.budget || 0)
      };
  
      this.props.updateBudgetList(this.props.index, updatedBudget);
    };
  
    render() {
      const { name, amount } = this.state;
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
  
  export default BudgetList;