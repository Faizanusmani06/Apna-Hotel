import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
export type UserType = {
    _id : string;
    email : string;
    password : string;
    firstName : string;
    lastName : string;
} // intelliSense will help us

const userSchema = new mongoose.Schema ({ // mongoose schema capital S in string
    email : {type: String, required: true, unique: true},
    password : {type : String, required: true},
    firstName : {type : String, required: true},
    lastName : {type : String, required: true},
});

userSchema.pre("save", async function(next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8)
    }
    next();
}) // middleware for mongodb that tell that before any updates to document get saved check if the password is changed and if it is changed then encrypt the password and call the next function(perform some action like saving in the db)

const User = mongoose.model<UserType>("User", userSchema);

export default User;