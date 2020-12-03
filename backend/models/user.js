const mongoose = require('mongoose');
const {model} = require('mongoose');
const Schema = require('mongoose').Schema;

const userSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    helperId: String,
    totalCauses: Number,
    totalDonations: Number,
    bio: String,
    email: String,
    password: String,
    donationRecords: [
        {
            donationId: String,
            timestamp: String,
            donateTo: String,
            amount: Number,
            likes: Number
        }
    ],
    friends: [
        {helperId: String}
    ]

})

module.exports = model('User', userSchema);