/*
 * @Author: Chenyu Wang
 * @LastEditors: Chenyu Wang
 * @email: chenyu.wang96@outlook.com
 * @github: https://github.com/alina52
 * @Date: 2021-10-21 23:21:52
 * @LastEditTime: 2021-10-29 13:07:43
 */
import { isEmpty } from 'lodash';

export const isEmptyCheck = (testObj) => {
  if (typeof testObj === 'number') {
    return false;
  } else {
    return isEmpty(testObj);
  }
};
