const mongoose = require('mongoose');
const {model} = require('mongoose');
const Schema = require('mongoose').Schema;

const charitySchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    link: String,
    type: String
})

module.exports = model('Charity', charitySchema);