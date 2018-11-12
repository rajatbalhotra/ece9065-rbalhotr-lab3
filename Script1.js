// JavaScript source code
var Instrument = require('./instrument');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb')

var instruments = [
    new Instruments({
        title: 'drums',
        image: 'music\drums.jpg',
        price: 749,
        tax: 13,
        quantity: 5
    }),
    new Instruments({
        title: 'flute',
        image: 'music\flute.jpg',
        price:1416,
        tax: 13,
        quantity: 5
    }),
	new Instruments({
        title: 'guitar',
        image: 'music\guitar.jpg',
        price:340,
        tax: 13,
        quantity: 5
    }),
	new Instruments({
        title: 'Harmonium',
        image: 'music\Harmonium.jpg',
        price:150,
        tax: 13,
        quantity: 5
    }),
	new Instruments({
        title: 'melodeon',
        image: 'music\melodeon.jpg',
        price:773,
        tax: 13,
        quantity: 5
    }),
	new Instruments({
        title: 'piano',
        image: 'music\piano.jpg',
        price:49995,
        tax: 13,
        quantity: 5
    }),
	new Instruments({
        title: 'Saxophone',
        image: 'music\Saxophone.jpg',
        price:1603,
        tax: 13,
        quantity: 5
    }),
	new Instruments({
        title: 'tabla',
        image: 'music\tabla.jpg',
        price:179,
        tax: 13,
        quantity: 5
    }),
	new Instruments({
        title: 'trumpet',
        image: 'music\trumpet.jpg',
        price:399,
        tax: 13,
        quantity: 5
    }),
	new Instruments({
        title: 'violin',
        image: 'music\violin.jpg',
        price:420,
        tax: 13,
        quantity: 5
    }),
];

var done = 0;
for (var i = 0; i < instruments.length; i++) {
    instruments[i].save(function (err, result) {
        done++;
        if (done == instruments.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
