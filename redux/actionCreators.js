export default (expenses) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce((sum, value) => sum + value, 0);
  };
  
  export default (savings) => {
    return savings
        .map((savings) => savings.amount)
        .reduce((sum, value) => sum + value, 0);
  };
  
