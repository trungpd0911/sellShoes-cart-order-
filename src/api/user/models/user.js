const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            require: true,
            unique: true,
        },
        password: {
            type: String,
            minlength: 8,
            require: true,
        },
        fullName: {
            type: String,
            minlength: 6,
            required: true,
        },
    },
    { collection: 'users' }
);

module.exports = mongoose.model('user', UserSchema);