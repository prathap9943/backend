const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

const User = mongoose.model('User', userSchema, 'users');

exports.create = function (data) { 
    return User.create(data);
};

exports.getUserByEmail = function(email) {
    return User.findOne({email})
}