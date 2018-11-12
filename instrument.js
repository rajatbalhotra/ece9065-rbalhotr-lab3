// JavaScript source code
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    tax: { type: Number, required: true },
    quantity: { type: Number, required: true }
});

module.exports = mongoose.model('Instruments', schema);
