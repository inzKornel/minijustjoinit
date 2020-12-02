export class ApiRequestException extends Error {
  constructor() {
    super('Api request failed');
    this.name = this.constructor.name;
    Error.captureStackTrace(this, ApiRequestException);
  }

  getMessage() {
    return this.message;
  }

  static isInstance(err: any): err is ApiRequestException {
    return typeof err === 'object' && err instanceof ApiRequestException;
  }
}
