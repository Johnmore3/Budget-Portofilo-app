import React, { Component } from 'react'



class SavingsList extends React.Component {
 state = {
   savingsTotal: "",
   stocks: "",
   bonds: "",
   rothIra:"",
   houseValue:"",
   otherValuables:"",
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
    savingsTotal: "",
    stocks: "",
    bonds: "",
    rothIra:"",
    houseValue:"",
    otherValuables:"",
   });
   this.props.onChange({
    savingsTotal: "",
    stocks: "",
    bonds: "",
    rothIra:"",
    houseValue:"",
    otherValuables:"",
   });
 };

 render() {
   return (
     <form>
       <input
         name="savingsTotal"
         placeholder="Expense name"
         value={this.state.savingsTotal}
         onChange={e => this.change(e)}
       />
       <br />
       <input
         name="stocks"
         placeholder="Stocks value:"
         value={this.state.stocks}
         onChange={e => this.change(e)}
       />
       <br />
       <input
         name="bonds"
         placeholder="Bonds value:"
         value={this.state.bonds}
         onChange={e => this.change(e)}
       />
       <br />
       <input
         name="rothira"
         placeholder="Roth IRA value:"
         value={this.state.rothIra}
         onChange={e => this.change(e)}
       />
       <br />
       <input
         name="housevalue"
         placeholder="House value:"
         value={this.state.rothIra}
         onChange={e => this.change(e)}
       />
       <br />
       <input
         name="othervaluable"
         placeholder="Other valuables value:"
         value={this.state.rothIra}
         onChange={e => this.change(e)}
       />
       <br />
       <button onClick={e => this.onSubmit(e)}>Submit</button>
     </form>
   );
 }
}
export default SavingsList