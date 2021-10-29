/*
 * @Author: Chenyu Wang
 * @LastEditors: Chenyu Wang
 * @email: chenyu.wang96@outlook.com
 * @github: https://github.com/alina52
 * @Date: 2021-10-28 21:39:01
 * @LastEditTime: 2021-10-29 13:07:48
 */
export default class MessageVO {
  type: null;
  status: null;
  message: null;
  errorCode: -1;
  body: null;
  timestamp: null;

  constructor(type, status, message, errorCode, body) {
    this.type = type;
    this.status = status;
    this.message = message;
    this.errorCode = errorCode;
    this.body = body;
    this.timestamp = new Date().getTime();
  }
}
