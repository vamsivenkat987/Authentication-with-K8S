import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import { currentuserRouter } from "./routes/current-user";
import { signIn } from "./routes/signin";
import { signOut } from "./routes/signout";
import { signUp } from "./routes/signup";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/notFoundError";

import cookieSession from "cookie-session";

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(cookieSession({
  // cookie encryption false
  signed: false, 
  secure: process.env.NODE_ENV !== 'test'
}))


app.use(currentuserRouter);
app.use(signUp);
app.use(signIn);
app.use(signOut);
app.use(errorHandler);
app.get("*",async () => {
  throw new NotFoundError();
})

export { app };
