import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/customError";

// import { DatabaseValidation } from "../errors/databaseValidation";
// import { RequestValidationError } from "../errors/requestValidation";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    // const formattedErrors = err.errors.map((error) => {
    //   return { message: error.msg, field: error.param };
    // });

    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  
  }
  
  // console.log("Something went wrong", err);
  res.status(400).send({
    errors: [{ message: "something went wrong" }],
  });
};
