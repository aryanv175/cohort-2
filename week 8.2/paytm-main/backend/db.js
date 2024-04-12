const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://aryanverma:S8J0LAsOZ9hPsXZ0@cluster0.eitqolz.mongodb.net/paytm-app");

const User = mongoose.model('Users',{
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        require: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const Account = mongoose.model('Accounts', {
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

module.exports = {
    User, 
};