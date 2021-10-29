/*
 * @Author: Chenyu Wang
 * @LastEditors: Chenyu Wang
 * @email: chenyu.wang96@outlook.com
 * @github: https://github.com/alina52
 * @Date: 2021-10-28 21:46:03
 * @LastEditTime: 2021-10-29 13:07:28
 */
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
  