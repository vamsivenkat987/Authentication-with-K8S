import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { RequestValidationError } from "../errors/requestValidation";


export const validationRequest = (req: Request, res: Response, next: NextFunction) => {

    const erros = validationResult(req);
    if(!erros.isEmpty()){
        throw new RequestValidationError(erros.array());
    }

    next();
    

};