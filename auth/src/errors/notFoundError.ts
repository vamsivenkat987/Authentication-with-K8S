import { CustomError } from "./customError";
 export class NotFoundError extends CustomError{
     statusCode = 400;
     constructor(){
         super("Path not found error");
        Object.setPrototypeOf(this, NotFoundError.prototype);

     }

     serializeErrors(){
         return [{message: "Not Found"}]
     }
     
 }