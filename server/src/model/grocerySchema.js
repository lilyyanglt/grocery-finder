const mongoose = require('mongoose');

const stringType = {
  type: String,
  required: true
}

const itemSchema = new mongoose.Schema({
  storeName: stringType,
  itemName: stringType,
  itemPrice: stringType,
  itemDesc: stringType
});

const Items = mongoose.model("Items", itemSchema);

module.exports = { Items };