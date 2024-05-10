import { Schema, model } from 'mongoose'
import mongoose from 'mongoose';

interface IUser{
    login: string;
    pwd: string;
}

const userSchema = new Schema<IUser> ({
    login: {type: String, required: true},
    pwd: {type: String, required: true}
});


export const Users = mongoose.models.Users || mongoose.model('Users', userSchema);
