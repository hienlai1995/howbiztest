const initState = {
  pagination: 2,
  hiddentnav: 1,
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "pagination/changePage":
      return {
        ...state,
        pagination: action.payload,
      };
    case "subheader/changestyle":
      return {
        ...state,
        hiddentnav: action.payload,
      };
    default:
      return state;
  }
};
export default rootReducer;
