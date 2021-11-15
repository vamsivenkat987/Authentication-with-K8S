import express, { Request, Response } from "express";
import { body } from "express-validator";
import { User } from "../models/user";
import { validationRequest } from "../middlewares/validateRequest";
import { BadRequestError } from "../errors/badRequestError";
import { Password } from "../hashing/passwordHashing";
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post("/api/users/signin",[
  body('email').isEmail().withMessage('Email must be valid'),
  body('password').trim().notEmpty().withMessage('Password shouldnot be empty')
],validationRequest, async (req: Request,res: Response) => {
  const { email, password } = req.body;
  const exsistingUser = await User.findOne({ email });

  if(!exsistingUser){
    throw new BadRequestError('Invalid User');
  }

  const checkPassword = await Password.compareTo(exsistingUser.password, password);
  if(!checkPassword){
    throw new BadRequestError('Password given was wrong');
  }


  const userJwt = jwt.sign({
    id: exsistingUser.id,
    email: exsistingUser.email
  },  process.env.JWT_KEY!);

  req.session = {
    jwt: userJwt,
  };

  res.status(200).send(exsistingUser);

  // const errors = validationResult(req);
  // if(!errors.isEmpty()){
  //   throw new RequestValidationError(errors.array());
  // }
});

export { router as signIn };
