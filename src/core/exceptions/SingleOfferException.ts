export class SingleOfferException extends Error {
  constructor() {
    super('Error checking single offer memory object');
    this.name = this.constructor.name;
    Error.captureStackTrace(this, SingleOfferException);
  }

  getMessage() {
    return this.message;
  }

  static isInstance(err: any): err is SingleOfferException {
    return typeof err === 'object' && err instanceof SingleOfferException;
  }
}
