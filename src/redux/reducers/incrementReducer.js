const initialState = {
  value: 0,
};

const incrementReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        value: state.value + action.payload,
      };
      case 'RESET':
      return initialState;
    default:
      return state;
  }
};

export default incrementReducer;


