import * as Constants from "src/pages/list/constants";

const listReducer = (state = {}, action) => {
  switch (action.type) {
    case Constants.LIST_RECEIVE_LIST:
      return {
        ...state,
        list: action.data.data,
      };
    default:
      return state;
  }
};

export default listReducer;
  