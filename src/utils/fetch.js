import qs from 'qs';
import fetch from 'isomorphic-fetch';
import * as Constants from 'src/app/constants';
import urls from 'src/config/Urls';
import { message } from 'src/utils/message';
import appConfig from 'src/config/AppConfig';

const BASE_URL = urls.baseResourceUrl;

/**
 * Handle Url with params
 * @param url
 * @param param
 * @returns {*}
 */
function handleUrlWithParams(url, param) {
  let completeUrl = BASE_URL + url;

  if (param) {
    if (completeUrl.indexOf('?') === -1) {
      completeUrl = `${completeUrl}?${ObjToURLString(param)}`;
    } else {
      completeUrl = `${completeUrl}&${ObjToURLString(param)}`;
    }
  }
  return completeUrl;
}

/**
 * Handle Url
 * @param url
 * @returns {*}
 */
function handleUrl(url) {
  let completeUrl = BASE_URL + url;
  return completeUrl;
}

/**
 * Transfer pramas to String with format as 'test=1&test2=2'
 * @param param
 * @returns {String}
 * @constructor
 */
function ObjToURLString(param) {
  let str = '';
  if (Object.prototype.toString.call(param) === '[object Object]') {
    const list = Object.entries(param).map((item) => {
      return `${item[0]}=${item[1]}`;
    });
    str = list.join('&');
  }
  return str;
}

//Get
export async function get(url, param) {
  const completeUrl = handleUrlWithParams(url, param);
  const response = await fetch(completeUrl, {
    xhrFields: {
      withCredentials: true, //Cross-Region
    },
  });
  const result = await response.json();
  if (!response.ok) {
    message.error(result.message || 'Internel Error.');
  }

  return result;
}

//Post
export async function post(url, param) {
  const completeUrl = handleUrl(url);
  const response = await fetch(completeUrl, {
    method: 'POST',
    xhrFields: {
      withCredentials: true,
    },
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(param),
  });
  const result = await response.json();
  if (!response.ok) {
    message.error(result.message || 'Internel Error');
  }
  message.success(result.message || 'Success !');
  return result;
}

//Patch
export async function patch(url, param) {
  const completeUrl = handleUrl(url);
  const response = await fetch(completeUrl, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(param),
  });
  const result = await response.json();
  if (!response.ok) {
    message.error(result.message || 'Internel Error');
  }
  message.success(result.message || 'Success !');
  return result;
}

//Put
export async function put(url, param) {
  const completeUrl = handleUrl(url);
  const response = await fetch(completeUrl, {
    method: 'PUT',
    xhrFields: {
      withCredentials: true,
    },
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(param),
  });
  const result = await response.json();
  if (!response.ok) {
    message.error(result.message || 'Internel Error');
  }
  message.success(result.message || 'Success !');
  return result;
}

//Delete
export async function del(url, param) {
  const completeUrl = handleUrlWithParams(url, param);
  const response = await fetch(completeUrl, {
    method: 'delete',
    xhrFields: {
      withCredentials: true,
    },
  });
  const result = await response.json();
  if (!response.ok) {
    message.error(result.message || 'Internel Error');
  }
  message.success(result.message || 'Success !');
  return result;
}
