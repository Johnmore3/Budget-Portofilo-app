class EarningsList extends React.Component {
    state = {
      name: "",
      earnings: ""
    };
  
    handleOnChange = e => {
      this.setState(
        {
          [e.target.name]: e.target.value
        },
        () => this.updateEarningsList()
      );
    };
  
    updateEarningsList = () => {
      const updatedEarnings = {
        name: this.state.name,
        earnings: parseInt(this.state.earnings|| 0)
      };
  
      this.props.updateEarnigsist(this.props.index, updatedEarnings);
    };
  
    render() {
      const { name, earnings } = this.state;
      return (
        <div>
          <label>Income from:</label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={this.handleOnChange}
          />
          <label>Total:</label>
          <input
            name="earnings"
            type="number"
            value={earnings}
            onChange={this.handleOnChange}
          />
        </div>
      );
    }
  }
  
  export default EarningsList;
