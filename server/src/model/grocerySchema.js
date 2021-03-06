const mongoose = require('mongoose');

const stringType = {
  type: String,
  required: true
}

const itemSchema = new mongoose.Schema({
  storeName: stringType,
  itemName: stringType,
  itemPrice: stringType,
  itemDesc: stringType,
  imgSource: stringType,
  isAdded: {
    type: Boolean,
    default: false,
  }
}, {timestamps: true});

const Items = mongoose.model("Items", itemSchema);

module.exports = { Items };