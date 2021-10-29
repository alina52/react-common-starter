/*
 * @Author: Chenyu Wang
 * @LastEditors: Chenyu Wang
 * @email: chenyu.wang96@outlook.com
 * @github: https://github.com/alina52
 * @Date: 2021-10-28 21:45:51
 * @LastEditTime: 2021-10-29 13:07:21
 */
import * as Constants from "src/pages/list/constants";
import customizedfetch from "src/utils/fetch";

export const fetchList = (dispatch) => {
    return customizedfetch(
      dispatch,
      Constants.LIST_URL_GET_LIST,
      {
        method: "GET",
      },
      Constants.LIST_REQUEST_LIST,
      Constants.LIST_RECEIVE_LIST
    );
};
