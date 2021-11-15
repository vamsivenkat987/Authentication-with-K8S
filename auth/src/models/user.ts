import Mongoose from "mongoose";
import {Password} from "../hashing/passwordHashing";


interface userAttr{
    email: string,
    password: string,
}

interface userModel extends Mongoose.Model<userDoc> {
    build(attr: userAttr): userDoc;
}
interface userDoc extends Mongoose.Document{
    email: string,
    password: string
}
const userSchema = new Mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
},{
    toJSON: {
        transform(doc, ret){
            ret.id = ret._id;
            delete ret._id;
            delete ret.password;
            delete ret.__v;

        }
    }
});

userSchema.pre('save', async function(done){
    if(this.isModified('password')){
        const hashedPassword = await Password.toHash(this.get('password'));
        this.set('password', hashedPassword);
    }
    done();
});

userSchema.statics.build = (attrs: userAttr) => {
    return new User(attrs);
};
const User = Mongoose.model<userDoc, userModel>("User", userSchema);

const user = User.build({
    email: "vamsi@gmail.com",
    password: "788" 
});
user.email
user.password 




export {User};
