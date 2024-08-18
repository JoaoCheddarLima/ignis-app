import mongoose, { Schema } from 'mongoose';

const item = new Schema({
    name: { type: String, required: true, unique: true },

    isCustomer: { type: Boolean, default: false },
    mail: { type: String, default: null },
    planExpiration: { type: Date, default: null },

    api_key: { type: String, default: null },
});

export interface IUser {
    name: string;
    isCustomer: boolean;
    planExpiration: Date;
    mail: string;
}

let modeledFix = mongoose.models.User

if (!modeledFix) {
    modeledFix = mongoose.model("User", item)
    modeledFix.createIndexes()
}

const User = modeledFix;

export { User };