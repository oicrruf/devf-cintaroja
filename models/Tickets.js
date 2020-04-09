const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Items = require('./Items');

const itemsTickets = new Schema({
  item: [{ type: Schema.Types.ObjectId, ref: 'Items' }],
  subtotal: {
    type: Number,
    required: true
  },
  iva: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  }
},{
  timestamps: true
});

const Tickets = mongoose.model('Tickets', itemsTickets);

module.exports = Tickets;