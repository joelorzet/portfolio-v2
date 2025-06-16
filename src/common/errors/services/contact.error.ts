export class ContactError extends Error {
  readonly status: number;

  constructor(message: string, status: number = 500) {
    super(message);
    this.name = 'ContactError';
    this.status = status;
  }
}

export class ContactBadRequestError extends ContactError {
  constructor(message: string, status: number = 400) {
    super(message, status);
    this.name = 'ContactBadRequestError';
  }
}
