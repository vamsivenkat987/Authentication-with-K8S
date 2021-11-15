import { CustomError } from "./customError";

export class DatabaseValidation extends CustomError {
  statusCode = 500;
  reason = "Database validation error";
  constructor() {
    super("Database validation error");
    Object.setPrototypeOf(this, DatabaseValidation.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
