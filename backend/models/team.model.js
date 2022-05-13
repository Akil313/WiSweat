const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const teamSchema = new Schema({
    name: {
        type: String
    },
    members: {
        type: [String],
        default: []
    },
    defLoc: {
        type: String
    },
    defTime: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: false
    },
    activeSweatId: {
        type: String,
        default: ""
    }
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;