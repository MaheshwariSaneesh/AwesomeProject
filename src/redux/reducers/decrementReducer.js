const initialState = {
  value: 0,
};

const decrementReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DECREMENT':
      return {
        ...state,
        value: state.value - action.payload,
      };
         case 'RESET':
      return initialState;
    default:
      return state;
  }
};

export default decrementReducer;
