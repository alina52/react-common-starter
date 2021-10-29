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
