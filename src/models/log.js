const mongoose = require('mongoose');
const { MongoGridFSChunkError } = require('mongoose/node_modules/mongodb');

const logSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    date:  {
        type: Date,
        required: true

    },
    level: {
        type: String,
        required: true // info, warning, error
    },
    message: {
        type: String,
        required: true // JSON, string
    },
    category: {
        type: String,
        required: false
    },
    user: {
        type: String,
        required: false
    },
    data: {
        type: Buffer,
        required: false
    },
    date_recorded: {
        type: Date,
        default: Date.now
    },

});

module.exports = mongoose.model('Log', logSchema); 