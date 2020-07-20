const mongoose = require('mongoose');

const stringType = {
  type: String,
  required: true
}

const itemSchema = new mongoose.Schema({
  storeName: stringType,
  itemName: stringType,
  itemPrice: {
    type: Number, 
    required: true
  }, 
  itemDesc: stringType
});

const Items = mongoose.model("Items", itemSchema);

module.exports = { Items };