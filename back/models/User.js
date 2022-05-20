const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    name: { type: String },
    email: { type: String },
    mobile: { type: Number },
    address: { type: String },
    password: { type: String },
    type: { type: String },
    events: { type: Array },
    profilepic: { data: Buffer, contentType: String },
});

const User = mongoose.model('User', UserSchema)
module.exports = User;
