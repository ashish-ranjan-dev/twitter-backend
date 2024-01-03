import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {JWT_SECRET} from '../config/server-config.js'

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String
    },
    bio: {
        type: String
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId
        }
    ]
});

userSchema.pre("save", function (next) {
    const encryptedPassword = bcrypt.hashSync(this.password, parseInt(9));
    this.password = encryptedPassword;
    next();
});

userSchema.methods.comparePassword = function compare(password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function generate() {
    return jwt.sign({
        id: this._id,
        email: this.email
    }, JWT_SECRET, {
        expiresIn: "2h"
    });
};

const User = mongoose.model("User", userSchema);

export default User;