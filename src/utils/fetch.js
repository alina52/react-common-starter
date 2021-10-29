import arrayFindIndex from "array-find-index";
import fetch from "isomorphic-fetch";
import * as Constants from "src/app/constants";
import urls from "src/config/Urls";
import appConfig from "src/config/AppConfig";
import MessageVO from "src/utils/MessageVO";

export const queryUrl = (url, params) => {
  let urlWithParams =
    url +
    (url.indexOf("?") === -1 ? "?" : "&") +
    Object.keys(params)
      .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
      .join("&");
  return urlWithParams;
};

const successHandler = (dispatch, options, requestType, successType, json) => {
  dispatch({
    type: Constants.FETCH_SUCCESS,
    options: options,
    requestType: requestType,
    messageFetchSuccess: new MessageVO(
      "SUCCESS",
      json.status,
      json.message || null
    ),
  });

  if (successType) {
    dispatch({
      type: successType,
      options: options,
      data: json,
    });
  }
};

const errorHandler = (dispatch, options, requestType, errorType, err) => {
  dispatch({
    type: Constants.FETCH_ERROR,
    options: options,
    requestType: requestType,
    messageFetchError: new MessageVO(
      "ERROR",
      err.status,
      err.message,
      err.errorCode,
      err.body
    ),
  });

  if (errorType) {
    dispatch({
      type: errorType,
      options: options,
      data: err,
    });
  }
};

const customizedfetch = (
  dispatch,
  uri,
  options = {},
  requestType,
  successType,
  errorType
) => {
  let url = urls.resourceUrl(uri);
  const headers = {
    "Content-Type": "application/json",
  };
  options.headers = options.headers || headers;

  if (options.showErrorMessage === undefined) {
    options.showErrorMessage = true;
  }

  if (appConfig.mock) {
    console.log(
      "Manually set body & queryParams as null as they will impact loading the data from json file."
    );
    console.log(options.body);
    console.log(options.queryParams);

    options.body = null;
    options.queryParams = null;
    options.method = "GET";
  } else {
    if (options.queryParams) {
      url = queryUrl(url, options.queryParams);
    }
    if (
      arrayFindIndex(["POST", "PUT", "DELETE"], (m) => m === options.method)
    ) {
      options.headers = headers;
    }
  }

  dispatch({
    type: Constants.FETCH_START,
    options: options,
    requestType: requestType,
  });

  dispatch({
    type: requestType,
    options: options,
  });

  return fetch(url, options)
    .then((response) => {
      const status = response.status;
      return response.text().then((text) => {
        let json;
        try {
          json = JSON.parse(text);
        } catch (err) {
          let throwErr = new Error();
          throwErr.status = status;
          throwErr.errorCode = json.errorCode;
          throwErr.message = err.message;
          throwErr.body = text;
          throw throwErr;
        }
        if (!response.ok) {
          let notOkErr = new Error();
          notOkErr.status = status;
          notOkErr.errorCode = json.errorCode;
          notOkErr.message = json.message || json.error || "No details";
          notOkErr.body = text;
          throw notOkErr;
        }

        json.status = status;

        if (appConfig.mock) {
          setTimeout(
            () =>
              successHandler(dispatch, options, requestType, successType, json),
            2000
          );
        } else {
          successHandler(dispatch, options, requestType, successType, json);
        }

        if (options.onSuccessCallback) {
          options.onSuccessCallback(json);
        }
      });
    })
    .catch((caughtError) => {
      if (appConfig.mock) {
        setTimeout(
          () =>
            errorHandler(
              dispatch,
              options,
              requestType,
              errorType,
              caughtError
            ),
          2000
        );
      } else {
        errorHandler(dispatch, options, requestType, errorType, caughtError);
      }

      if (options.onErrorCallback) {
        options.onErrorCallback(caughtError);
      }
    });
};

export default customizedfetch;
