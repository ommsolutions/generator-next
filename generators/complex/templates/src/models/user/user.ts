/**
 * https://github.com/Appsilon/styleguide/wiki/mongoose-typescript-models
 */

import {Schema} from "mongoose";
import {IUser} from "./user.interface";
import {Document, model} from "mongoose";
import {Model} from "mongoose";

export interface IUserModel extends IUser, Document {
}

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number
});

export let User: Model<IUserModel> = model<IUserModel>("User", userSchema);