const mongoose = require('moongoose')

const Schema = mongoose.Schema

const flightSchema = new mongoose.Schema({
    airline: { 
        type: String,
        enum: ["American", "Southwest", "United"],
    },
    airport: {
        type: String,
        enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
        default: "DEN"
    },
    flightNo: {
        type: Number,
        required: {
            min: 10,
            max: 9999
        }
    },
    departs: {
        type: Date,
        default: function() {
            return new Date().getFullYear() += 1
        }
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Flight', flightSchema)