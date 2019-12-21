export const earnings= [];

 (state = earningsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EARNINGS':
      return [
        ...state,
        action.earnings
      ];
    case 'REMOVE_EARNINGS':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EARNINGS':
      return state.map((earnings) => {
        if (earnings.id === action.id) {
          return {
            ...earnings,
            ...action.updates
          };
        } else {
          return earnings;
        };
      });
    case 'SET_EARNINGS':
      return action.earnings;
    default:
      return state;
  }
};