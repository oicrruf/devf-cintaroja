const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: Number,
  stock: Number,
});

const Items = mongoose.model('Items', itemsSchema);

module.exports = Items;