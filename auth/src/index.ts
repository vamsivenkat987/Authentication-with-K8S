import Mongoose from "mongoose";
import { app } from "./app";
const start = async () => {
  if(!process.env.JWT_KEY){
    throw new Error('JWT key must be defined');
  }

  try{
    await Mongoose.connect('mongodb://mongooseserv:27017/auth')
    console.log("Connecting to database");
    
  }catch(err){
    console.error(err);
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000!!");
  });
  
};

start();

