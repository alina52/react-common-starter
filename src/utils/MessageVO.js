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
