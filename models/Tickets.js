const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemsTickets = new Schema({
  name: {
    subtotal: Number,
    iva: Number,
    total: Number,
  },
  items: Item,
});

const Items = mongoose.model('Tickets', itemsTickets);

module.exports = Items;