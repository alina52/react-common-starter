import { isEmpty } from 'lodash';

export const isEmptyCheck = (testObj) => {
  if (typeof testObj === 'number') {
    return false;
  } else {
    return isEmpty(testObj);
  }
};
