const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const sweatSchema = new Schema({
    name: {
        type: String
    },
    teamId: {
        type: String
    },
    startTime: {
        type: String
    },
    location: {
        type: String
    },
    attending: {
        type: [Object]
    }
});

const Sweat = mongoose.model('Active-Sweat', sweatSchema);

module.exports = Sweat;