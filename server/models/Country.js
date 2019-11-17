const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CountrySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    population: {
        type: String,
        required: true
    },
    currencies: {
        type: String,
        required: true
    }
});

module.exports = Contry = mongoose.model('country', CountrySchema);
